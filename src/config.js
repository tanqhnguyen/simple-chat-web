import get from 'lodash/get'

const config = {
  api: {
    url: 'http://localhost:9000',
    prefix: 'api'
  },
  faye: {
    url: 'http://localhost:8000/faye'
  }
}

if (process.env.NODE_ENV === 'production') {
  config.api.url = 'http://chat-api.tannguyen.org'
  config.faye.url = 'http://chat-faye.tannguyen.org'
}

export default {
  get (path, defaultValue) {
    return get(config, path, defaultValue)
  }
}
