/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const ProductName = {
    RECORDM: 'RECORDM',
    DEVICEM: 'DEVICEM',
    INTEGRATIONM: 'INTEGRATIONM',
    ELASTICSEARCH: 'ELASTICSEARCH',
    USERM: 'USERM'
} as const;

export type ProductName = typeof ProductName[keyof typeof ProductName];


