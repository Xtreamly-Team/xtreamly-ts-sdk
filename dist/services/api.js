"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
class API {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async request(method, path, params, headers) {
        const url = new URL(this.baseUrl + path);
        if (params) {
            Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
        }
        return fetch(url.toString(), {
            method,
            headers: this.getHeaders(headers),
        }).then((res) => res.json());
    }
    async get(path, params, headers) {
        return this.request("GET", path, params, headers);
    }
    getHeaders(headers) {
        return headers && new Headers(headers);
    }
}
exports.API = API;
