<template>

    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="swiper" class="box">
        <swiper-slide v-for="(m,i) in swiperImg" :key="i">
            <img :src="m.src" alt=""  @click="gohome(i)">
        </swiper-slide>
    </swiper>
    

</template>

<script>



import store from "../vuex/store"

import {mapState} from "vuex"


import router from "./router"


export default {
  data () {
      return {
        //   msg:"123",
  
      }
  },
  components: {

  },
  methods: {
      change(){
          console.log(1);
            store.dispatch("change")
        },
        gohome(index){
            console.log(index);
            if(index==this.swiperImg.length-1){
                router.push({name:"login"})
            }
            
        }
        
  },
  beforeUpdate () {
    console.log(4);  
  },
  computed:

    {
        msg(){
            return "daydayup"
        },
        ...mapState([
            "myCount",
            "address",
            "swiperImg",
            "notNextTick",
            "swiperOption"
        ]),
      
     
    }

}
</script>
<style>
    img{
        width: 100%;
        height: 100%;
    }
</style>

