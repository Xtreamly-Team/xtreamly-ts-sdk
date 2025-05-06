# Xtreamly's Typescript SDK

Optimize and enhance your development process with this SDK, seamlessly integrating Xtreamly's advanced AI models and built-in on-chain capabilities to create fully customized trading bots tailored to your needs!

## Prerequisites

1. node v20.18.1 (the version inside the .nvmrc file)

## Install it as a typescript library

```bash
pnpm add git+ssh://git@github.com:Xtreamly-Team/xtreamly-ts-sdk
```

### Check the examples folder for usage examples:

e.g. [getVolatilityState.ts](examples%2FgetVolatilityState.ts)
```typescript
import {VolatilityAPI} from "xtreamly-sdk";

const api = new VolatilityAPI()
api.state("ETH").then(console.log);
```

### Configuration

Your trading bot is configured via the [.env](.env) file (environment variables):

1. `XTREAMLY_API_KEY`: A key to Xtreamly's API model predictions, get yours here: https://xtreamly.io/api

You can just copy the [.env.example](.env.example) file:
```bash
cp .env.example .env
```

## Local execution

1. Set node version (if you are using nvm)
    ```bash
    nvm use
    ```
2. Install dependencies:
    ```bash
    pnpm i && pnpm postinstall
    ```
3. Run an example:
    ```bash
    pnpm getVolatilityState
    ```