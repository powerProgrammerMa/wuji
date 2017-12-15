
import router  from "./router";

import Vue from "vue";

import VueAwesomeSwiper from "vue-awesome-swiper";
import store from "../vuex/store";

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import {mapState,mapActions} from "vuex";
Vue.use(Mint);

Vue.use(VueAwesomeSwiper);//全局使用

const app = new Vue({
    el:"#app",

    router,

    store,
    computed:{
        ...mapState([
            "transitionname",
        ])
    },
    methods:{
        ...mapActions([
            "changetransition",
        ])
    },
    watch:{
        "$route":function(to,from){
           
            var to = to.path.split("/")[1];
            var from = from.path.split("/")[1];
            console.log(to);
           console.log(from);
           if(to=="register"&&from=="login"){
               console.log(1);
               this.changetransition("login");
           }else if(to=="login"&&from=="register"){
            this.changetransition("login");
           }else if(to=="main" && from=="login"){
            this.changetransition("main");
           }else{
            this.changetransition("aaa");
           }

        },
    
    },
  
})