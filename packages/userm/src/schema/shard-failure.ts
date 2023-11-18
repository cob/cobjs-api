/* eslint-disable */


/**
 * 
 * @export
 * @interface ShardFailure
 */
export interface ShardFailure {
    /**
     * 
     * @type {string}
     * @memberof ShardFailure
     */
    'index'?: string;
    /**
     * 
     * @type {string}
     * @memberof ShardFailure
     */
    'node'?: string;
    /**
     * 
     * @type {any}
     * @memberof ShardFailure
     */
    'reason': any;
    /**
     * 
     * @type {number}
     * @memberof ShardFailure
     */
    'shard': number;
    /**
     * 
     * @type {string}
     * @memberof ShardFailure
     */
    'status'?: string;
}
