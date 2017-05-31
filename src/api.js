import config from './config'
import url from 'url'
import isObject from 'lodash/isObject'

export default function (path, options) {
  options = Object.assign({}, {
    credentials: 'include',
    headers: {}
  }, options)

  options.headers = Object.assign({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, options.headers)

  const method = (options.method || 'get').toLowerCase()
  if (method !== 'get' && options.body && isObject(options.body)) {
    options.body = JSON.stringify(options.body)
  }

  if (method === 'get' && options.query && isObject(options.query)) {
    path += url.format({query: options.query})
  }

  if (path.charAt(0) !== '/') path += '/'

  let prefix = options.prefix || config.get('api.prefix')
  if (prefix.charAt(0) !== '/') prefix = '/' + prefix

  path = `${config.get('api.url')}${prefix}${path}`

  return fetch(path, options).then((res) => {
    return res.json().then((json) => {
      if (res.status < 400) return json.data || null

      if (res.status === 401 || res.status === 403) {
        window.location.href = `${config.get('api.url')}/auth/github`
        return Promise.reject({
          code: res.status,
          message: 'Unauthenticated',
          params: null
        })
      }

      // return plain object for error here so that we can do comparison easier
      return Promise.reject(Object.assign({
        code: 500,
        message: 'Internal Server Error',
        params: null
      }, json.error))
    })
  })
}
