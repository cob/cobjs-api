import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { CreateDomainRequest } from '../model';
import { DecoratedDomain } from '../model';
import { UpdateDomainRequest } from '../model';
/**
 * DomainsApi - object-oriented interface
 * @export
 * @class DomainsApi
 * @extends {BaseAPI}
 */
export declare class DomainsApi extends BaseAPI {
    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Add a new definition to an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    addDefinitionToDomain(domainId: number, definitionId: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DecoratedDomain, any>>;
    /**
     *
     * @summary Creates a new domain
     * @param {CreateDomainRequest} [createDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    addDomain(createDomainRequest?: CreateDomainRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DecoratedDomain, any>>;
    /**
     *
     * @summary Delete an existing domain
     * @param {number} domainId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    deleteDomain(domainId: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Find a domain by name
     * @param {string} name The domain name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    findDomainByName(name: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DecoratedDomain, any>>;
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieves all domains
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    getAllDomains(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DecoratedDomain[], any>>;
    /**
     * It will include all definitions belonging to this domain but the definitions will not include it\'s field definitions.
     * @summary Retrieve a domain by it\'s identifier
     * @param {number} domainId The domain identifier
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the domain and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    getDomain(domainId: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DecoratedDomain, any>>;
    /**
     * The response will return the domain with its definitions but not with it\'s field definitions.
     * @summary Remove a definition from an existing domain
     * @param {number} domainId The domain identifier
     * @param {number} definitionId The definition identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    removeDefinitionFromDomain(domainId: number, definitionId: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DecoratedDomain, any>>;
    /**
     *
     * @summary Update an existing domain
     * @param {number} domainId The domain identifier
     * @param {UpdateDomainRequest} [updateDomainRequest] The new definition details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DomainsApi
     */
    updateDomain(domainId: number, updateDomainRequest?: UpdateDomainRequest, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DecoratedDomain, any>>;
}
