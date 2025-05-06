export declare class API {
    private readonly baseUrl;
    constructor(baseUrl: string);
    request(method: string, path: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<any>;
    get(path: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<any>;
    private getHeaders;
}
