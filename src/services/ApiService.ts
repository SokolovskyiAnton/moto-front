import { FetchOptions } from 'ofetch';
import { $Fetch } from 'nitropack';

export class ApiService {
  client: $Fetch
  config: FetchOptions
  constructor(config: FetchOptions) {
    this.config = config
    this.client = this.createHttpInstance()
  }
  createHttpInstance = (config: FetchOptions = this.config): $Fetch => $fetch.create(config)

  async request<T>(url: string, options?: FetchOptions): Promise<T> {
    try {
       return await this.client(url, options)
    } catch (e) {
      throw e
    }
  }
}
