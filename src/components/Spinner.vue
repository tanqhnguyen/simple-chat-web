<template>
  <div :class="className">
    <i class="fa fa-refresh fa-spin fa-3x fa-fw" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    mode: {
      type: String,
      default: 'full'
    }
  },
  computed: {
    className () {
      return [
        'Spinner',
        `Spinner--${this.mode}`
      ].join(' ')
    }
  },
  methods: {
    deleteMessage () {
      this.$emit('delete-message', {
        id: this.message.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Spinner {
  &--full {
    text-align: center;
    height: 100vh;
    padding-top: 40vh;
  }
}
</style>
