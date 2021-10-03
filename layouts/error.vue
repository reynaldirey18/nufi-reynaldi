<template>
  <v-container class="py-sm-6 py-4">
    <v-row class="fill-height" justify="center" align="center">
      <v-col cols="12" sm="6" class="text-center fill-height">
        <h1 v-if="error.statusCode === 404" class="text-h4">
          {{ error }}
        </h1>
        <h1 v-else class="text-h4">
          {{ error }}
        </h1>
        <v-btn color="primary" to="/" class="mt-4"> Home page </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
