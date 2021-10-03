<template>
  <div>
    <v-row align="center">
      <v-col>
        <!--        <div class="text-h5 font-weight-medium">Add New User</div>-->
        <v-breadcrumbs
          class="pa-0 mb-0 mt-3"
          :items="breadcrumbs"
        ></v-breadcrumbs>
      </v-col>
      <!--      <v-col cols="auto"> </v-col>-->
    </v-row>

    <user-form />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Users',
        to: '/users',
        exact: true,
      },
      {
        text: 'Add User',
        to: '/users/create',
      },
    ],
  }),
};
</script>

<style scoped></style>
