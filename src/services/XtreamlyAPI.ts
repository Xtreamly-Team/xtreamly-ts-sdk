import {API} from "./api";

export enum XtreamlyAPIPath {
  health = '',
  volatility="volatility_prediction",
  volatilityHistorical="volatility_historical",
  state="state_recognize",
  stateHistorical="state_historical",
}

export class XtreamlyAPI extends API {
  private readonly headers: Record<string, any>;

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

  async get(path: XtreamlyAPIPath, params?: Record<string, any>): Promise<any> {
    return super.get(path, params, this.headers);
  }

  async isOk(): Promise<boolean> {
    const res = await this.get(XtreamlyAPIPath.health);
    return res.status === 'ok';
  }
}
