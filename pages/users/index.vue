<template>
  <div>
    <v-row align="center">
      <v-col>
        <div class="text-h5 font-weight-medium">User Management</div>
        <!--    <div class="text-subtitle-1 blue-grey&#45;&#45;text text-lighten-1">Overview</div>-->
      </v-col>
      <v-col cols="auto">
        <v-breadcrumbs class="py-0 mb-0" :items="breadcrumbs"></v-breadcrumbs>
      </v-col>
    </v-row>

    <v-card class="mt-4 rounded-lg">
      <v-card-title>
        <v-row align="center" no-gutters>
          <v-col> Users </v-col>
          <v-col cols="6" sm="3">
            <v-text-field
              v-model="search"
              placeholder="Search..."
              hide-details
              rounded
              solo
              flat
              dense
              :prepend-inner-icon="icons.mdiMagnify"
            />
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :options.sync="options"
        :server-items-length="totalItems"
        :loading="loading"
        class="elevation-1"
      >
        <template #item.action="{item}">
          <v-tooltip top>
            <template #activator="{on}">
              <v-btn icon :to="`/users/${item.Employee_ID}/edit`" v-on="on">
                <v-icon small>{{ icons.mdiPencil }}</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>

    <v-tooltip left>
      <template #activator="{on}">
        <v-btn
          to="/users/create"
          fab
          fixed
          bottom
          right
          color="primary"
          v-on="on"
        >
          <v-icon>{{ icons.mdiPlus }}</v-icon>
        </v-btn>
      </template>
      <span>Add New User</span>
    </v-tooltip>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import debounce from 'lodash/debounce';

export default {
  data: () => ({
    breadcrumbs: [
      {
        text: 'Users',
        to: '/users',
      },
      {
        text: 'User Management',
        to: '/users',
      },
    ],
    loading: false,
    search: '',
    totalItems: 0,
    items: [],
    options: {},
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'Employee_Name',
      },
      {text: 'Username', value: 'Employee_NickName'},
      {text: 'Last Update', value: 'Employee_LastUpdate'},
      {text: 'Action', value: 'action'},
    ],
  }),
  computed: {
    ...mapState('users', ['users']),
  },
  watch: {
    search() {
      this.debounceFetch();
    },
    options: {
      handler() {
        this.fetch();
      },
      deep: true,
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.loading = true;
      const data = await this.$store.dispatch('users/all', {
        search: this.search,
      });
      this.loading = false;

      this.totalItems = data.data.total;
      this.options.page = data.data.page;
    },
    debounceFetch: debounce(function () {
      this.fetch();
    }, 500),
  },
};
</script>

<style scoped></style>
