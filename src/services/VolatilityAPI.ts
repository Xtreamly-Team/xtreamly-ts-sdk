import {XtreamlyAPI, XtreamlyAPIPath} from "./XtreamlyAPI";
import {Horizons, StatePrediction, VolatilityPrediction} from "../domains/VolatilityPrediction";

export class VolatilityAPI extends XtreamlyAPI {
  async prediction(
    horizon: Horizons = Horizons.min1,
    symbol = "ETH",
  ): Promise<VolatilityPrediction> {
    return this.get(XtreamlyAPIPath.volatility, {
      symbol,
      horizon,
    });
  }

  async historicalPrediction(
    startDate: Date,
    endDate: Date,
    horizon: Horizons = Horizons.min1,
    symbol = "ETH",
  ): Promise<VolatilityPrediction[]> {
    return this.get(XtreamlyAPIPath.volatilityHistorical, {
      symbol,
      horizon,
      start_date: startDate.getTime(),
      end_date: endDate.getTime(),
    });
  }

  async state(
    symbol = "ETH",
  ): Promise<StatePrediction> {
    return this.get(XtreamlyAPIPath.state, {
      symbol,
    });
  }

  async historicalState(
    startDate: Date,
    endDate: Date,
    symbol = "ETH",
  ): Promise<VolatilityPrediction[]> {
    return this.get(XtreamlyAPIPath.stateHistorical, {
      symbol,
      start_date: startDate.getTime(),
      end_date: endDate.getTime(),
    });
  }
}
