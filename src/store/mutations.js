import * as types from './mutation-types'

import find from 'lodash/find'

function addNewMessage (state, message) {
  const existing = find(state.messages, {id: message.id})
  if (!existing) state.messages.unshift(message)
}

export default {
  [types.DELETED_MESSAGE] (state, {id}) {
    state.messages = state.messages.filter((msg) => {
      return msg.id !== id
    })
  },

  [types.FETCHED_MESSAGES] (state, messages) {
    state.messages = messages
    state.isFetchingMessages = false
  },

  [types.SENT_MESSAGE] (state, message) {
    addNewMessage(state, message)
  },

  [types.RECEIVED_MESSAGE] (state, message) {
    addNewMessage(state, message)
  },

  [types.FETCHED_ME] (state, me) {
    state.me = me
    state.isFetchingMe = false
  }
}
