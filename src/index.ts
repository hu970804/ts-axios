import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

/**
 * 处理 config
 * @param config
 */
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

/**
 * 处理 URL
 * @param config 
 */
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export default axios
