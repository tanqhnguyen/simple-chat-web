<template>
  <div class="MessageList box">
    <ul class="list" ref="list">
      <message
        v-for="message in messages"
        v-on:delete-message="deleteMessage"
        :key="message.id"
        :message="message"
        :me="me">
      </message>
    </ul>
  </div>
</template>

<script>
import Message from './Message'

export default {
  name: 'MessageList',
  components: {
    Message
  },
  props: {
    me: Object,
    messages: Array
  },
  methods: {
    deleteMessage ({id}) {
      this.$emit('delete-message', {id})
    }
  }
}
</script>

<style lang="scss" scoped>
.MessageList {
  display: flex;

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
}
</style>
