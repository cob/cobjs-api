import { HitsMetadata } from "./hits-metadata";
import { ShardStatistics } from "./shard-statistics";
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
