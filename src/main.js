// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function(value){
  return value.toUpperCase()
});
Vue.mixin({
  created() {
    console.log("global mixin");
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
