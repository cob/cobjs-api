import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { DecoratedInstance } from '../schema';
import { Instance } from '../schema';
/**
 * InstancesApi - object-oriented interface
 * @export
 * @class InstancesApi
 * @extends {BaseAPI}
 */
export declare class InstancesApi extends BaseAPI {
    /**
     * Adds a new instance represented by the passed Object.
     * @summary Add an instance
     * @param {Instance} instance the instance to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    addInstance(instance: Instance, options?: AxiosRequestConfig): Promise<void>;
    /**
     * Adds a LogM log entry to an instance.
     * @summary Add log to instance
     * @param {number} id The instance id
     * @param {string} [body] The log message
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    addLogMessageToInstance(id: number, body?: string, options?: AxiosRequestConfig): Promise<void>;
    /**
     * Deletes an instance.
     * @summary Delete an instance
     * @param {number} id The id of the instance to delete
     * @param {boolean} [ignoreRefs] If ignoreRefs is true, then the instance will be deleted even if other instances are referencing it. Otherwise an error will be returned if there are instances with a reference to it.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    deleteInstance(id: number, ignoreRefs?: boolean, options?: AxiosRequestConfig): Promise<void>;
    /**
     * Download a file that is attached to a $file field
     * @summary Download file from field in instance
     * @param {string} id The id of the instance
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {string} filename The filename of the file to download.
     * @param {string} [disposition] The Content-Disposition to use when downloading the file. Only useful when used as link in a webpage, to control if it should be downloaded or shown inline.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    downloadFile(id: string, fieldDefinitionId: string, filename: string, disposition?: string, options?: AxiosRequestConfig): Promise<void>;
    /**
     * Obtains a representation of an instance.
     * @summary Get an instance
     * @param {number} id
     * @param {string} [ifNoneMatch] If a value is given, it will be compared to the current version of the instance and if they are equal, a 304 will be returned.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    getInstance(id: number, ifNoneMatch?: string, options?: AxiosRequestConfig): Promise<DecoratedInstance>;
    /**
     * Obtains a representation of an instance with no values. Useful for using as a starting point for creating a new instance.
     * @summary Get a new empty instance
     * @param {number} definitionId The id of the definition of which we want the empty instance.
     * @param {boolean} [withDefaults] If true, all the fields with defined default values will have them already filled. If false, all the fields will have empty values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    getNewInstance(definitionId: number, withDefaults?: boolean, options?: AxiosRequestConfig): Promise<DecoratedInstance>;
    /**
     * Updates an instance with the complete representation passed.
     * @summary Update an instance
     * @param {number} id The id of the instance to update
     * @param {Instance} instance the updated instance
     * @param {boolean} [acceptOutdated] Should outdated $extRef fields be accepted?
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    updateInstance(id: number, instance: Instance, acceptOutdated?: boolean, options?: AxiosRequestConfig): Promise<void>;
    /**
     * Upload a file to be used as a value for a $file field
     * @summary Upload file to field in instance
     * @param {string} id When uploading to an existing instance, it\&#39;s the id of the instance. When uploading for an instance that doesn\&#39;t yet exist, it should be an UUID that matches the one the instance will have on creation. This way the already uploaded files will be moved to the final destination.
     * @param {string} fieldDefinitionId The id of the field definition of the $file field
     * @param {any} [file] The file to upload.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    uploadFile(id: string, fieldDefinitionId: string, file?: any, options?: AxiosRequestConfig): Promise<void>;
}
