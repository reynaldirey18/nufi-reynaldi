<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="3">
      <v-card color="transparent" class="px-6 py-4 rounded-lg" flat>
        <v-card-title
          class="justify-center subtitle-2 py-0 font-weight-medium mb-6"
        >
          You are invited to our wedding
        </v-card-title>
        <logo class="mx-auto mb-4" height="250" />
        <center>
          <v-img src="/Date.png" width="220" contain v-bind="$attrs"> </v-img>
        </center>

        <v-card-title
          class="justify-center button text-h7 py-0 font-weight-medium my-6"
        >
          Dear, {{ userName }}
        </v-card-title>
        <v-card-title
          class="justify-center body-1 text-h7 py-0 font-weight-small my-6"
        >
          “Let us share our happiness”
        </v-card-title>

        <v-card-actions class="px-10 justify-center">
          <v-btn rounded color="#a28a09" depressed dark @click="onSubmit">
            Open Invitation
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'auth',
  auth: 'guest',
  data() {
    return {
      loading: false,
      userName: '',
    };
  },
  mounted() {
    this.userName = this.$route.query.name;
  },
  methods: {
    onSubmit() {
      this.loading = true;
      // await this.$auth.loginWith('local', {
      //   data: {
      //     username: this.$route.query.name,
      //   },
      // });

      this.$router.push('/home');
      this.loading = false;
    },
  },
};
</script>

<style scoped></style>
