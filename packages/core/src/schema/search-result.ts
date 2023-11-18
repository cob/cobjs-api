/* eslint-disable */

// May contain unused imports in some cases
import { HitsMetadata } from "./hits-metadata"
// May contain unused imports in some cases
import { ShardStatistics } from "./shard-statistics"

/**
 * 
 * @export
 * @interface SearchResult
 */
export interface SearchResult {
    /**
     * 
     * @type {ShardStatistics}
     * @memberof SearchResult
     */
    'shards': ShardStatistics;
    /**
     * 
     * @type {HitsMetadata}
     * @memberof SearchResult
     */
    'hits': HitsMetadata;
}
