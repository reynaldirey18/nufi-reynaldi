<template>
  <v-row justify="center">
    <v-col
      v-for="stat in stats"
      :key="stat.title + stat.subtitle"
      cols="6"
      sm="3"
    >
      <card-statistic v-bind="stat" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DashboardStats',
  computed: {
    stats() {
      return [
        {
          color: 'primary',
          icon: this.icons.mdiAccount,
          title: '2.000',
          subtitle: 'Total Users',
        },
        {
          color: 'error',
          icon: this.icons.mdiFlag,
          title: '20',
          subtitle: 'Total Posts',
        },
        {
          color: 'info',
          icon: this.icons.mdiChat,
          title: '2.000',
          subtitle: 'Total Messages',
        },
        {
          color: 'warning',
          icon: this.icons.mdiComment,
          title: '200',
          subtitle: 'Total Comments',
        },
      ];
    },
  },
};
</script>
