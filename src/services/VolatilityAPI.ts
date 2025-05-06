import {XtreamlyAPI, XtreamlyAPIPath} from "./XtreamlyAPI";
import {Horizons, StatePrediction, VolatilityPrediction, Symbols} from "../domains/VolatilityPrediction";

export class VolatilityAPI extends XtreamlyAPI {
  async prediction(
    horizon: Horizons = Horizons.min1,
    symbol = Symbols.ETH,
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
    symbol = Symbols.ETH,
  ): Promise<VolatilityPrediction[]> {
    return this.get(XtreamlyAPIPath.volatilityHistorical, {
      symbol,
      horizon,
      start_date: startDate.getTime(),
      end_date: endDate.getTime(),
    });
  }

  async state(
    symbol = Symbols.ETH,
  ): Promise<StatePrediction> {
    return this.get(XtreamlyAPIPath.state, {
      symbol,
    });
  }

  async historicalState(
    startDate: Date,
    endDate: Date,
    symbol = Symbols.ETH,
  ): Promise<VolatilityPrediction[]> {
    return this.get(XtreamlyAPIPath.stateHistorical, {
      symbol,
      start_date: startDate.getTime(),
      end_date: endDate.getTime(),
    });
  }

  async extremeState(
    symbol = Symbols.ETH,
  ): Promise<StatePrediction> {
    return this.get(XtreamlyAPIPath.extremeState, {
      symbol,
    });
  }

  async extremeHistoricalState(
    startDate: Date,
    endDate: Date,
    symbol = Symbols.ETH,
  ): Promise<VolatilityPrediction[]> {
    return this.get(XtreamlyAPIPath.extremeStateHistorical, {
      symbol,
      start_date: startDate.getTime(),
      end_date: endDate.getTime(),
    });
  }
}
