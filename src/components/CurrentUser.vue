<template>
  <div v-if="user" class="CurrentUser card is-fullwidth">
    <div class="card-content">
      <a class="CurrentUser__card-avatar">
        <img :src="user.avatarUrl" class="CurrentUser__card-avatar-img">
      </a>

      <div class="CurrentUser__card-user">
        <div class="card-user-name">
          <strong>{{ user.displayName }}</strong>
        </div>
      </div>

      <a :href="logoutUrl">
        Log out
      </a>
    </div>
  </div>
  <div v-else class="CurrentUser CurrentUser--login is-fullwidth">
    <a class="button is-primary" :href="loginUrl('github')">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
      <span>Log in with GitHub</span>
    </a>
  </div>
</template>

<script>
import config from 'src/config'

export default {
  name: 'CurrentUser',
  props: {
    user: Object
  },
  computed: {
    logoutUrl () {
      return `${config.get('api.url')}/auth/logout`
    }
  },
  methods: {
    loginUrl (service) {
      return `${config.get('api.url')}/auth/${service}`
    }
  }
}
</script>

<style lang="scss" scoped>
.CurrentUser {
  &__card-header {
    background-image: url(http://placehold.it/600x200);
    background-position: 0 50%;
    background-size: 100% auto;
    border-bottom: 1px solid #e1e8ed;
    border-radius: 4px 4px 0 0;
    height: 95px;
    width: 100%;
  }

  &__card-avatar {
    background-color: #fff;
    border-radius: 6px;
    display: inline-block !important;
    float: left;
    margin: -46px 5px 0 8px;
    max-width: 100%;
    padding: 1px;
    vertical-align: bottom;
  }

  &__card-user {
    margin: 5px 0 0;
  }

  &__card-avatar-img {
    border: 2px solid #fff;
    border-radius: 7px;
    box-sizing: border-box;
    color: #fff;
    height: 72px;
    width: 72px;
  }

  &--login {
    height: 50px;
    text-align: right;
  }
}
</style>
