/* eslint-disable */

// May contain unused imports in some cases
import { ShardFailure } from "./shard-failure"

/**
 * 
 * @export
 * @interface ShardStatistics
 */
export interface ShardStatistics {
    /**
     * 
     * @type {number}
     * @memberof ShardStatistics
     */
    'failed': number;
    /**
     * 
     * @type {number}
     * @memberof ShardStatistics
     */
    'successful': number;
    /**
     * 
     * @type {number}
     * @memberof ShardStatistics
     */
    'total': number;
    /**
     * 
     * @type {Array<ShardFailure>}
     * @memberof ShardStatistics
     */
    'failures': Array<ShardFailure>;
}
