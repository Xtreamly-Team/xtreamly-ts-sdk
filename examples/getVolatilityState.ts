import {VolatilityAPI} from "xtreamly-sdk";

const api = new VolatilityAPI()
api.state("ETH").then(console.log);