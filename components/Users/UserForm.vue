<template>
  <validation-observer v-slot="{handleSubmit}">
    <form @submit.prevent="handleSubmit(onSubmit)">
      <v-card class="mt-4 rounded-lg">
        <v-card-title>
          <v-row align="center" no-gutters>
            <v-col> {{ title }} </v-col>
            <!--          <v-col cols="auto">-->
            <!--            <v-btn :disabled="loading" type="button" icon>-->
            <!--              <v-icon>mdi-arrow-left</v-icon>-->
            <!--            </v-btn>-->
            <!--          </v-col>-->
          </v-row>
        </v-card-title>

        <v-divider />

        <v-card-text>
          <validation-provider
            v-slot="{errors}"
            name="Name"
            :rules="rules.name"
          >
            <label for="name" class="font-weight-medium mb-2 d-block">
              Name:
            </label>
            <v-text-field
              id="name"
              v-model="form.name"
              dense
              label="Name"
              outlined
              solo
              flat
              :error-messages="errors"
            />
          </validation-provider>

          <validation-provider
            v-slot="{errors}"
            name="Username"
            :rules="rules.username"
          >
            <label for="username" class="font-weight-medium mb-2 d-block">
              Username:
            </label>
            <v-text-field
              id="username"
              v-model="form.username"
              dense
              label="Username"
              outlined
              solo
              flat
              :error-messages="errors"
            />
          </validation-provider>

          <validation-provider
            v-slot="{errors}"
            name="Password"
            :rules="rules.password"
          >
            <label for="password" class="font-weight-medium mb-2 d-block">
              Password:
            </label>
            <v-text-field
              id="password"
              v-model="form.password"
              dense
              label="Password"
              outlined
              solo
              flat
              :error-messages="errors"
            />
          </validation-provider>
        </v-card-text>

        <v-divider />

        <v-card-actions class="pa-4">
          <v-btn :loading="loading" type="submit" color="primary" depressed>
            Save
          </v-btn>
          <v-btn
            :disabled="loading"
            type="button"
            class="text-capitalize"
            to="/users"
            exact
            text
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </validation-observer>
</template>
<script>
export default {
  name: 'UserForm',
  data: () => ({
    loading: false,
    form: {
      name: '',
      username: '',
      password: '',
    },
    rules: {
      name: 'required',
      username: 'required',
      password: 'required',
    },
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
    isEditing() {
      return !!this.id;
    },
    title() {
      return this.isEditing ? 'Edit User' : 'Add User';
    },
  },
  methods: {
    onSubmit() {
      //
    },
  },
};
</script>
