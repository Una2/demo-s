import Vue from "vue";
import Vuex, { Store } from "vuex";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
Vue.use(Vuex);

//方式一
import test from "./test";
// export default new Vuex.Store({
//   modules: {
//     test
//   }
// })
//方式二
const store: Store<any> = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    test
  }
});
export default store;
