import {Line} from 'vue-chartjs';
import colors from 'vuetify/es5/util/colors';

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          borderColor: colors.blue.base,
          data: [10, 20],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
