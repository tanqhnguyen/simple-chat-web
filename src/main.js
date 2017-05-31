// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import Faye from 'faye'

import config from './config'

const client = new Faye.Client(config.get('faye.url'))

client.subscribe('/messages', ({event, payload}) => {
  store.dispatch(event, payload)
})

let bootstrapped = false

function run () {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
}

client.on('transport:up', () => {
  if (bootstrapped) return
  window.chat = client
  run()
  bootstrapped = true
})
