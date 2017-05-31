<template>
  <div v-if="isLoading" class="Main">
    <spinner />
  </div>
  <div v-else class="Main columns">
    <div class="column is-3">
      <current-user :user="me" />
    </div>
    <div class="column is-6">
      <message-list @delete-message="deleteMessage"
                    :messages="messages"
                    :me="me" />
      <div class="box">
        <message-input @send-message="sendMessage"
                       :disabled="!me"/>
      </div>
    </div>
  </div>
</template>

<script>
import MessageList from 'src/components/MessageList'
import MessageInput from 'src/components/MessageInput'
import Spinner from 'src/components/Spinner'
import CurrentUser from 'src/components/CurrentUser'

export default {
  name: 'Main',
  components: {
    MessageList,
    MessageInput,
    Spinner,
    CurrentUser
  },
  computed: {
    messages () {
      return this.$store.getters.getMessages()
    },

    isLoading () {
      return this.$store.getters.isLoading()
    },

    me () {
      return this.$store.getters.me()
    }
  },
  methods: {
    deleteMessage ({id}) {
      this.$store.dispatch('deleteMessage', {id})
    },

    sendMessage ({content}) {
      this.$store.dispatch('sendMessage', {content})
    }
  }
}
</script>

<style lang="scss" scoped>
.Main {
  .MessageList {
    height: 80vh;
  }
}
</style>
