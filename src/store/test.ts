
// const initState:any = {
//     menuList:'store测试',
// }
// const mutation  = {};
// //action
// const actions = {
//     routeUrl({commit,state}:any,{backFun}:any){
//         backFun()
//     }
// }
// //getters
// export default{
//     namespaced:true,
//     state:initState,
//     getters,
//     actions,
//     mutations
// }
import { Commit } from "vuex";
const state: any = {
  testData: 0
}
const mutations: any = {
  setTestData(state: any, params: object) {
    state.testData = params;
  }
}
const actions: any = {
  setTestDataFn(context: { commit: Commit }, params: object){
    context.commit("setTestData", params);
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
