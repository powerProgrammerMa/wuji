<template>
  <div class="my">

      <div class="my-top">
        <router-link :to="{name:'login'}"><i class="iconfont icon-weixiao"></i></router-link>
        <p>{{name}}</p>
      </div>

      <div class="my-bottom" v-for="(item,i) in mydata" :key="i">

        <i :class="item.font"></i><p><span>{{item.txt}}</span> <i class="iconfont icon-mjiantou-copy"></i></p>
      </div>
      
  </div>
</template>
<script>
import {mapState} from "vuex";
export default {
  data () {
    return {
      name:localStorage.myname  
    }
  },
  computed:{
    ...mapState([
      "mydata",
      "nowusername",
    ])
  }
}
</script>
