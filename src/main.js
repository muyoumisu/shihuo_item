import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'lib-flexible/flexible'


Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  components: {App},
  template: '<App/>',
  router,
}).$mount('#app')
