"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XtreamlyAPI = exports.XtreamlyAPIPath = void 0;
const api_1 = require("./api");
var XtreamlyAPIPath;
(function (XtreamlyAPIPath) {
    XtreamlyAPIPath["health"] = "";
    XtreamlyAPIPath["volatility"] = "volatility_prediction";
    XtreamlyAPIPath["volatilityHistorical"] = "volatility_historical";
    XtreamlyAPIPath["state"] = "state_recognize";
    XtreamlyAPIPath["stateHistorical"] = "state_historical";
    XtreamlyAPIPath["extremeState"] = "extreme_state_recognize";
    XtreamlyAPIPath["extremeStateHistorical"] = "extreme_state_historical";
})(XtreamlyAPIPath || (exports.XtreamlyAPIPath = XtreamlyAPIPath = {}));
class XtreamlyAPI extends api_1.API {
    constructor() {
        super("https://api.xtreamly.io/");
        const XTREAMLY_API_KEY = process.env.XTREAMLY_API_KEY;
        if (!XTREAMLY_API_KEY) {
            throw new Error(`
        Missing environment variables: XTREAMLY_API_KEY.
        Request your API key here: https://xtreamly.io/api 
      `);
        }
        this.headers = {
            "x-api-key": XTREAMLY_API_KEY,
        };
    }
    async get(path, params) {
        return super.get(path, params, this.headers);
    }
    async isOk() {
        const res = await this.get(XtreamlyAPIPath.health);
        return res.status === 'ok';
    }
}
exports.XtreamlyAPI = XtreamlyAPI;
