import { DecoratedDefinition } from '@cob/cobjs-api-recordm';
export declare const rmListDefinitions: (filter?: {
    includeDisabled?: boolean;
    name?: string | null;
}) => Promise<DecoratedDefinition[]>;
