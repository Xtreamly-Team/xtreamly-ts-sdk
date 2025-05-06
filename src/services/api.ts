export class API {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request(method: string, path: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<any> {
    const url = new URL(this.baseUrl + path);

    if (params) {
      Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
    }

    return fetch(url.toString(), {
      method,
      headers: this.getHeaders(headers),
    }).then((res) => res.json());
  }

  async get(path: string, params?: Record<string, any>, headers?: Record<string, any>): Promise<any> {
    return this.request("GET", path, params, headers);
  }

  private getHeaders(headers?: Record<string, any>) {
    return headers && new Headers(headers);
  }
}
