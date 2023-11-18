import { AxiosRequestConfig } from 'axios';
import { BaseAPI } from '@cob/cobjs-api-core';
import { ReportGenerationRequest } from '../schema';
/**
 * ReportsApi - object-oriented interface
 * @export
 * @class ReportsApi
 * @extends {BaseAPI}
 */
export declare class ReportsApi extends BaseAPI {
    /**
     * Can be used with both JSON - the simplest way when calling from other code (or even cURL) - or directly from an HTML form, in <code>application/x-www-form-urlencoded</code> format.
     * @summary Generate Report
     * @param {ReportGenerationRequest} [reportGenerationRequest] The params passed to the report.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    generate(reportGenerationRequest?: ReportGenerationRequest, options?: AxiosRequestConfig): Promise<void>;
    /**
     * To simplify development of new report templates. Arguments to the template can be passed as query string args.
     * @summary Test a report template
     * @param {File} [f] The template excel file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApi
     */
    test(f?: File, options?: AxiosRequestConfig): Promise<void>;
}
