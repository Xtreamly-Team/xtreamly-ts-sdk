import { XtreamlyAPI } from "./XtreamlyAPI";
import { Horizons, StatePrediction, VolatilityPrediction, Symbols } from "../domains/VolatilityPrediction";
export declare class VolatilityAPI extends XtreamlyAPI {
    prediction(horizon?: Horizons, symbol?: Symbols): Promise<VolatilityPrediction>;
    historicalPrediction(startDate: Date, endDate: Date, horizon?: Horizons, symbol?: Symbols): Promise<VolatilityPrediction[]>;
    state(symbol?: Symbols): Promise<StatePrediction>;
    historicalState(startDate: Date, endDate: Date, symbol?: Symbols): Promise<VolatilityPrediction[]>;
    extremeState(symbol?: Symbols): Promise<StatePrediction>;
    extremeHistoricalState(startDate: Date, endDate: Date, symbol?: Symbols): Promise<VolatilityPrediction[]>;
}
