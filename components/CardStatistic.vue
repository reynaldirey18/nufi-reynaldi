<template>
  <v-card class="px-6 rounded-lg fill-height">
    <v-row align="center">
      <v-col cols="auto">
        <v-avatar width="60" height="60" :color="avatarColor">
          <v-icon size="30" :color="color"> {{ icon }}</v-icon>
        </v-avatar>
      </v-col>
      <v-col>
        <v-card-title class="pl-0 font-weight-bold">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="pl-0">
          {{ subtitle }}
        </v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'CardStatistic',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    avatarColor() {
      return this.bgColor || `${this.color} lighten-4`;
    },
  },
};
</script>
