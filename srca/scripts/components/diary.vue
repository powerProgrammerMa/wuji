<template>
  <div>
      <header class="diary-header">
          <router-link to="/rili"><i class="iconfont icon-calendar"></i></router-link>
          <router-link to="/sousuo"><i class="iconfont icon-sousuo"></i></router-link>
          <router-link to="/rili"><span>全部</span><i class="iconfont icon-down-trangle"></i></router-link>
          <router-link to="/share"><i class="iconfont icon-shuxie"></i></router-link>
      </header>
      <section class="diary-section">
         <mt-loadmore :top-method="loadTop"  ref="loadmore">
         
             <!-- <h1>{{datatime}}</h1> -->
            <dl v-for="(item,i) in diarydata" :key="i" >
                <dt>
                    <p><span>{{datatime[i].day}}</span><span>{{datatime[i].week}}</span></p>
                    <p>{{datatime[i].yearandmonth}}</p>   
                    <div class="quan"></div> 
                </dt>
                <dd>
                    <div>
                        <p>{{item.content}}</p>
                        <p>{{datatime[i].time}}</p>
                    </div>
                    <div class="sanjiao"></div>
                </dd>
            </dl>
           
          

            <!-- <div>{{diarydata}}</div> -->
            </mt-loadmore>
      </section>
  </div>
</template>
<script>

import store from "../vuex/store";
import {mapState,mapActions} from "vuex";
export default {
    
  methods: {
      loadTop(){
          var _this=this;

          setTimeout(function(){
             _this.$refs.loadmore.onTopLoaded();
          },2000)
      },
    
  },
 
  mounted() {
      var dd = {
          name:localStorage.myname,
          url:"/diary"
      }
       store.dispatch('getdata',dd)
  },
  computed: {
    ...mapState([
        "diarydata",
        "nowusername",
        "datatime"
    ]),
    
  }
}
</script>
