import state from "./state";
import actions from "./actions";
import mutations from "./mutations";

import Vue from "vue";

import Vuex from "vuex";


Vue.use(Vuex);//全局使用Vuex

const store = new Vuex.Store({
    state,
    actions,
    mutations
});

export default store;