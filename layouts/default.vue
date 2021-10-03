<template>
  <v-app id="auth-app">
    <v-app-bar hide-on-scroll fixed elevation="0" color="transparent" app>
      <v-img
        src="/logo.png"
        contain
        class="mx-2"
        max-height="60"
        max-width="60"
      >
      </v-img>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import icons from '@/utils/icons';

export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: icons.mdiHomeVariant,
          title: 'Home',
          to: '/',
        },
        {
          icon: icons.mdiAccountMultiple,
          title: 'Users',
          children: [
            {
              title: 'User Management',
              to: '/users',
            },
            {
              title: 'Role & Permissions',
              to: '/roles',
            },
          ],
        },
      ],
      miniVariant: false,
      title: 'GITS.ID',
    };
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss">
::v-deep {
}
body {
  width: 100% !important;
}
#auth-app {
  background-image: url('~@/assets/bg-mobile.png');
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  min-height: 100vh;
  background-attachment: fixed;
}
</style>
