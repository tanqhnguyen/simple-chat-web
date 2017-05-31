<template>
  <div class="MessageInput field has-addons">
    <p class="control is-expanded">
      <input @keyup.enter="sendMessage"
             class="input"
             type="text"
             placeholder="Type a message..."
             :disabled="disabled"
             v-model="input">
    </p>
    <p class="control">
      <button class="button is-info"
              :disabled="disabled"
              @click="sendMessage">
        Send
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'MessageInput',
  data: function () {
    return {
      input: ''
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    sendMessage (e) {
      const content = this.input.trim()
      if (!content) return
      this.$emit('send-message', {content})
      this.input = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100% !important;
}
</style>
