export const getMessages = (state) => {
  return (size) => {
    if (!size) return state.messages
    return state.messages.slice(0, size)
  }
}

export const isLoading = (state) => {
  return () => {
    return state.isFetchingMessages || state.isFetchingMe
  }
}

export const me = (state) => {
  return () => {
    return state.me
  }
}
