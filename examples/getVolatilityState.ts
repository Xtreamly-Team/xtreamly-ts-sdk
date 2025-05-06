import {Symbols, VolatilityAPI} from "../src";

const api = new VolatilityAPI()
api.extremeState(Symbols.BTC).then(console.log);