/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ProductName = {
    RECORDM: 'recordm',
    DEVICEM: 'devicem',
    INTEGRATIONM: 'integrationm',
    ELASTICSEARCH: 'elasticsearch',
    USERM: 'userm'
} as const;

export type ProductName = typeof ProductName[keyof typeof ProductName];


