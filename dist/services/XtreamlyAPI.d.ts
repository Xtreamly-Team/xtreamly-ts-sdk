import { API } from "./api";
export declare enum XtreamlyAPIPath {
    health = "",
    volatility = "volatility_prediction",
    volatilityHistorical = "volatility_historical",
    state = "state_recognize",
    stateHistorical = "state_historical"
}
export declare class XtreamlyAPI extends API {
    private readonly headers;
    constructor();
    get(path: XtreamlyAPIPath, params?: Record<string, any>): Promise<any>;
    isOk(): Promise<boolean>;
}
