<template>
  <div class="passer">
      <header>
        <ul>
          <li @click="changetopnow(i)" v-for="(item,i) in passertop" :key="i" :class="topnow==i?'passeractive':''">{{item}}</li>
           <i class="iconfont icon-tishi"></i>
        </ul>
      </header>
      <section>
        <div class="swiper-container">
        <div class="swiper-wrapper" >
          <div class="swiper-slide">
          
            <div class="content"  :style="{background:bgcolor()}" v-for="(item,i) in newdata" :key="i">
                <div class="contentTop">
                  <img :src="loginimg" alt="">
                  <span>{{item.username}}</span>
                </div>
                
                <div class="contentBottom">
                  <div class="neirong">
                    {{item.content}}
                  </div>
                  <p><span>{{newdatatime[i].time}}</span><span>0<i class="iconfont icon-xihuan"></i></span></p>
                </div>
            </div>
            </div>
          <div class="swiper-slide"> 
            <div class="content"  :style="{background:bgcolor()}" v-for="(item,i) in newdata" :key="i">
                <div class="contentTop">
                  <img :src="loginimg" alt="">
                  <span>{{item.username}}</span>
                </div>
                
                <div class="contentBottom">
                  <div class="neirong">
                    {{item.content}}
                  </div>
                  <p><span>{{newdatatime[i].time}}</span><span>0<i class="iconfont icon-xihuan"></i></span></p>
                </div>
            </div>
          </div>
          <div class="swiper-slide"> 
            <div class="content"  :style="{background:bgcolor()}" v-for="(item,i) in diarydata" :key="i">
                <div class="contentTop">
                  <img :src="loginimg" alt="">
                  <span>{{item.username}}</span>
                </div>
                
                <div class="contentBottom">
                  <div class="neirong">
                    {{item.content}}
                  </div>
                  <p><span>{{datatime[i].time}}</span><span>0<i class="iconfont icon-xihuan"></i></span></p>
                </div>
            </div>

          </div>
        </div>
      </div>
      </section>
  </div>
</template>
<script>
import {mapState} from "vuex";
import store from "../vuex/store";
export default {
  data () {
    return {
      // bgcolor:"#a65384"
    }
  },
 
  created () {
      
    },
  mounted () {
        var dd = {
      name:localStorage.name,
      url:"/new",
    }
    store.dispatch('getdata',dd);
      var _this = this;
      this.$nextTick(function(){
      this.mySwiper = new Swiper('.swiper-container', {
      autoplay: false,//可选选项，自动滑动
      freeMode:false,
      onInit: function(swiper){
        console.log(this);
        swiper.activeIndex=_this.topnow;
    },
    onSlideChangeEnd:function(swiper){
        _this.changetopnow(swiper.activeIndex);
    }
    
    })
  
    })
    },
 
  computed: {
      ...mapState([
        "passertop",
        "topnow",
        "loginimg",
        "datatime",
        "newdatatime",
        "diarydata",
        "newdata",
      ])
    },
    
    methods: {
      changetopnow(index){
          console.log(this);
          this.mySwiper.slideTo(index);
          store.dispatch("changetopnow",index);
      },
      bgcolor(){
        var r = parseInt((Math.random()*255)).toString(16);
        console.log(r);
        var g = parseInt((Math.random()*255)).toString(16);
        console.log(g);
        var b = parseInt((Math.random()*255)).toString(16);
        console.log(b);
        var co = "#"+r+g+b;
        return co;
      }
    }
}
</script>
