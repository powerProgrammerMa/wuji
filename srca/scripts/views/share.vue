<template>
    <div class="share">
        <header>
            <router-link :to="{name:'diary'}">取消</router-link>
            <p>其他<i class="iconfont icon-down-trangle"></i></p>
            <i class="iconfont icon-gou" @click="mit"></i>
        </header>
        <section>
            <textarea name="content" id="content" v-model="content" placeholder="请输入你要发表的动态"></textarea>
            <span>{{num}}</span>
        </section>
        <footer>
            <ul>
                <li><i class="iconfont icon-Aa"></i></li>
                <li><i class="iconfont icon-zhizhang3"></i></li>
                <li><i class="iconfont icon-tupian"></i></li>
                <li><i class="iconfont icon-paishe"></i></li>
                <li><i class="iconfont icon-caidan"></i></li>
                <li><i class="iconfont icon-shizhong"></i></li>
            </ul>
        </footer>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import {mapactions} from "vuex";
import store from "../vuex/store";
export default {
    data () {
        return {
            content:"",
            num:0,      
        }
    },
    methods: {

      mit(){
          console.log(this.content.length);
          if(this.content.length==0){
              Toast({
                    message: '再输入点内容吧！',
                    position: 'middle',
                    duration: 3000,
                    iconClass:"iconfont icon-weixiao",
                });
                return;
          }
          var data = {
              url:"/mit",
              content:this.content,
              username:localStorage.myname,
          }
          store.dispatch("mitdata",data);
    
      }
  }
}
</script>
