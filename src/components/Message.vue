<template>
  <li class="Message">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img :src="message.user.avatarUrl" alt="Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <a :href="message.user.profileUrl" target="_blank">
            <strong>{{ message.user.displayName }}</strong>
          </a>
          <small class="Message__created">{{created}}</small>
          <br>
          <div ref="content">
            {{ message.content }}
          </div>
        </div>
        <nav class="level">
          <div v-if="!isConfirmingDeletion && isAuthor" class="level-left">
            <a class="level-item"
               @click="isConfirmingDeletion = true"
               ref="deleteMessage">
              <span class="icon is-small"><i class="fa fa-trash"></i></span>
            </a>
          </div>
          <div v-else-if="isConfirmingDeletion" class="level-left">
            <button class="button is-danger is-small"
                    @click="deleteMessage">
              Yes
            </button>
            <button class="button is-link is-small"
                    @click="isConfirmingDeletion = false">
              No
            </button>
          </div>
        </nav>
      </div>
    </article>
  </li>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Message',
  props: {
    message: Object,
    me: Object
  },
  data: function () {
    return {
      isConfirmingDeletion: false
    }
  },
  computed: {
    isAuthor () {
      return this.me && this.me.id !== this.message.user.id
    },
    created () {
      return moment.utc(this.message.created).fromNow()
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
.media {
  margin-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(211,214,219,.5);
}

.Message {
  &__created {
    float: right;
    padding-right: 10px;
  }
}
</style>
