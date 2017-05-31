import * as types from './mutation-types'
import api from '../api'

export const fetchMessages = ({commit}) => {
  api('/messages').then((messages) => {
    commit(types.FETCHED_MESSAGES, messages)
  })
}

export const sendMessage = ({commit}, payload) => {
  api('/messages', {
    method: 'post',
    body: payload
  }).then((message) => {
    commit(types.SENT_MESSAGE, message)
  })
}

export const deleteMessage = ({commit}, payload) => {
  commit(types.DELETED_MESSAGE, {
    id: payload.id
  })
  api(`/messages/${payload.id}`, {
    method: 'delete'
  })
}

export const receivedMessage = ({commit}, payload) => {
  commit(types.RECEIVED_MESSAGE, payload)
}

export const deletedMessage = ({commit}, payload) => {
  commit(types.DELETED_MESSAGE, payload)
}

export const fetchMe = ({commit}, payload) => {
  api('/me', {
    prefix: 'auth'
  }).then((me) => {
    commit(types.FETCHED_ME, me)
  })
}
