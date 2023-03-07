import { DecoratedInstance, InstanceField } from "../schema";
import { InstancesApi } from "../api/instances-api";
import RmInstanceFile from "./RmInstanceFile";
export default class RmInstance {
    static API: InstancesApi;
    private readonly instance;
    private readonly fieldsNameMap;
    constructor(instance: DecoratedInstance);
    /**
     * Updates internal data structures for quick access and findings
     * @param fields the list of fields to analyze
     * @param parent the parent field
     * @private
     */
    private updateInternalDataStructure;
    private flattenFields;
    get id(): number;
    get version(): number;
    /**
     * Lookup all instance fields with a specific name
     * @param name the name of the field to look for
     */
    field(name: string): InstanceField | null;
    /**
     * Lookup all instance fields with a specific name.
     * @param name the name of the field to look for
     */
    fields(name: string): InstanceField[];
    /**
     * Shortcut method to get the first value of a field of the Instance.
     * @param name the field name
     */
    value(name: string): string | undefined;
    /**
     * Shortcut method to get the first value of a field of the Instance and turn it into a specific type
     * @param name the field name
     * @param transformer the transformer function to return the value as a specific type
     */
    private valueAndTransform;
    /**
     * Shortcut method to get the first value of a field of the Instance as a number.
     * @param name the field name
     */
    valueAsNumber(name: string): number | undefined;
    /**
     * Shortcut method to get the first value of a field of the Instance as a Date.
     * @param name the field name
     */
    valueAsDate(name: string): Date | undefined;
    /**
     * Shortcut method to get the first value of a field of the Instance as an RmInstanceFile.
     * @param name the field name
     */
    valueAsFile(name: string): RmInstanceFile | undefined;
    /**
     * Get all the values of fields with the specified name.
     * @param name the field name
     */
    values(name: string): string[];
    /**
     * Get all the values of fields with the specified name as numbers
     * @param name the field name
     */
    valuesAsNumbers(name: string): number[];
    /**
     * Get all the values of fields with the specified name as numbers
     * @param name the field name
     */
    valuesAsDates(name: string): Date[];
    /**
     * Shortcut method to get all values of a field of the Instance as an RmInstanceFile.
     * @param name the field name
     */
    valuesAsFiles(name: string): RmInstanceFile[];
    /**
     * Upload a file into a $file field.
     * @param field the target field to upload the files
     * @param fieldUploads a Pair of field and the file to upload
     */
    uploadFiles(field: InstanceField, fieldUploads: File[]): Promise<RmInstanceFile[]>;
    /**
     * Veriify if this instance is updatable
     */
    canUpdate(): boolean;
    static load(id: number): Promise<RmInstance>;
}
