import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 导入公用样式
import "../../assets/css/common.scss";
// 导入bimq样式
import "../../assets/css/bimq.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
