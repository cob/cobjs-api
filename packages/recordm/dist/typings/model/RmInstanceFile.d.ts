export default class RmInstanceFile {
    private readonly instanceId;
    private readonly fieldDefinitionId;
    private readonly filename;
    constructor(instanceId: number, fieldDefinitionId: number, filename: string);
    get name(): string;
    get path(): string;
}
