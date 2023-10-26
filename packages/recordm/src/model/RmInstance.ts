import {DecoratedInstance, InstanceField} from "../schema";
import {Dictionary} from "@cob/cobjs-api-core";
import {InstancesApi} from "../api/instances-api";
import RmInstanceFile from "./RmInstanceFile";

export default class RmInstance {

  public static API = new InstancesApi();

  private readonly instance: DecoratedInstance;
  // Allows for easy lookup by field name
  private readonly fieldsNameMap: Dictionary<InstanceField[]>;

  constructor(instance: DecoratedInstance) {
    this.instance = instance;
    this.fieldsNameMap = {};

    this.updateInternalDataStructure(this.instance.fields || []);
  }

  /**
   * Updates internal data structures for quick access and findings
   * @param fields the list of fields to analyze
   * @param parent the parent field
   * @private
   */
  private updateInternalDataStructure(fields: InstanceField[], parent?: InstanceField | null) {
    this.flattenFields(fields).forEach((f: InstanceField) => {
      if (!this.fieldsNameMap[f.fieldDefinition.name]) {
        this.fieldsNameMap[f.fieldDefinition.name] = [f];
      } else {
        this.fieldsNameMap[f.fieldDefinition.name].push(f);
      }
    });
  }

  private flattenFields(fields: InstanceField[]): InstanceField[] {
    // @ts-ignore
    return fields.flatMap(f => [f, ...this.flattenFields(f.fields || [])]);
  }

  get id() {
    return this.instance.id;
  }

  get version() {
    return this.instance.version;
  }

  /**
   * Lookup all instance fields with a specific name
   * @param name the name of the field to look for
   */
  field(name: string): InstanceField | null {
    return this.fieldsNameMap[name]?.[0] || null;
  }

  /**
   * Lookup all instance fields with a specific name.
   * @param name the name of the field to look for
   */
  fields(name: string): InstanceField[] {
    return this.fieldsNameMap[name] || [];
  }

  /**
   * Shortcut method to get the first value of a field of the Instance.
   * @param name the field name
   */
  value(name: string): string | undefined {
    const firstFieldWithValue = this.fields(name)?.find(f => !!f.value)
    return firstFieldWithValue?.value || undefined
  }

  /**
   * Shortcut method to get the first value of a field of the Instance and turn it into a specific type
   * @param name the field name
   * @param transformer the transformer function to return the value as a specific type
   */
  private valueAndTransform<T>(name: string, transformer: (v: string) => T): (T | undefined) {
    const v = this.value(name)
    return v ? transformer(v) : undefined
  }


  /**
   * Shortcut method to get the first value of a field of the Instance as a number.
   * @param name the field name
   */
  public valueAsNumber(name: string): number | undefined {
    return this.valueAndTransform(name, (v: string) => parseInt(v, 10))
  }

  /**
   * Shortcut method to get the first value of a field of the Instance as a Date.
   * @param name the field name
   */
  public valueAsDate(name: string): Date | undefined {
    return this.valueAndTransform(name, (v: string) => new Date(parseInt(v, 10)))
  }

  /**
   * Shortcut method to get the first value of a field of the Instance as an RmInstanceFile.
   * @param name the field name
   */
  public valueAsFile(name: string): RmInstanceFile | undefined {
    let fileField = this.field(name);
    if (!fileField?.value) return undefined
    return new RmInstanceFile(this.id, fileField.fieldDefinition.id, fileField.value)
  }

  /**
   * Get all the values of fields with the specified name.
   * @param name the field name
   */
  values(name: string): string[] {
    // Forced the cast because ts is not understanding that I'm filtering out undefined/null values
    return this.fields(name).filter(f => !!f.value).map(f => f.value) as string[]
  }

  /**
   * Get all the values of fields with the specified name as numbers
   * @param name the field name
   */
  valuesAsNumbers(name: string): number[] {
    return this.values(name).map(v => parseInt(v, 10))
  }

  /**
   * Get all the values of fields with the specified name as numbers
   * @param name the field name
   */
  valuesAsDates(name: string): Date[] {
    return this.values(name).map(v => new Date(parseInt(v, 10)))
  }

  /**
   * Shortcut method to get all values of a field of the Instance as an RmInstanceFile.
   * @param name the field name
   */
  public valuesAsFiles(name: string): RmInstanceFile[] {
    // Forced the cast because ts is not understanding that I'm filtering out undefined/null values
    return this.fields(name)
      .filter(f => !!f.value)
      .map(f => new RmInstanceFile(this.id, f.fieldDefinition.id, f.value!));
  }

  /**
   * Upload a file into a $file field.
   * @param field the target field to upload the files
   * @param fieldUploads a Pair of field and the file to upload
   */
  async uploadFiles(field: InstanceField, fieldUploads: File[]): Promise<RmInstanceFile[]> {
    const promises = fieldUploads
      .map(file => {
        return RmInstance.API.uploadFile(`${this.id}`, `${field.fieldDefinition.id}`, file)
          .then((resp: any) => {
            // TODO: the API is missing the annotation for the response format
            // @ts-ignore
            let filename = (resp.data as string)
              .replaceAll("<textarea>", "")
              .replaceAll("</textarea>", "");

            return new RmInstanceFile(this.id, field.fieldDefinition.id, filename)
          });
      });

    return (await Promise.all(promises));
  }

  /**
   * Veriify if this instance is updatable
   */
  canUpdate() {
    return !!this.instance._links.update;
  }

  static async load(id: number) {
    try {
      const instance = (await RmInstance.API.getInstance(id));
      return Promise.resolve(new RmInstance(instance));

    } catch (err) {
      console.error("Error loading instance with id", id);
      return Promise.reject(err);
    }
  }

}