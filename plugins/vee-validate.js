import Vue from 'vue';
import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import id, {messages} from 'vee-validate/dist/locale/id.json';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
    message: messages[rule],
  });
}

localize({
  id,
});
