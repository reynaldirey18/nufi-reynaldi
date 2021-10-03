import Vue from 'vue';
import icons from '@/utils/icons';

export default function () {
  Vue.mixin({
    computed: {
      icons() {
        return icons;
      },
    },
  });
}
