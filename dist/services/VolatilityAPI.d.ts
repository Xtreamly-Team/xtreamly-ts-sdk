import { XtreamlyAPI } from "./XtreamlyAPI";
import { Horizons, StatePrediction, VolatilityPrediction } from "../domains/VolatilityPrediction";
export declare class VolatilityAPI extends XtreamlyAPI {
    prediction(horizon?: Horizons, symbol?: string): Promise<VolatilityPrediction>;
    historicalPrediction(startDate: Date, endDate: Date, horizon?: Horizons, symbol?: string): Promise<VolatilityPrediction[]>;
    state(symbol?: string): Promise<StatePrediction>;
    historicalState(startDate: Date, endDate: Date, symbol?: string): Promise<VolatilityPrediction[]>;
}
