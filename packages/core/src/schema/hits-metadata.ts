/* eslint-disable */

// May contain unused imports in some cases
import { Hit } from "./hit"
// May contain unused imports in some cases
import { TotalHits } from "./total-hits"

/**
 * 
 * @export
 * @interface HitsMetadata
 */
export interface HitsMetadata {
    /**
     * 
     * @type {TotalHits}
     * @memberof HitsMetadata
     */
    'total': TotalHits;
    /**
     * 
     * @type {Array<Hit>}
     * @memberof HitsMetadata
     */
    'hits': Array<Hit>;
}
