<template>
  <div class="login">
      <img :src="loginimg" alt="">
      <p>吾记</p>
      <form>
          <div class="icon">
          <input   placeholder="请输入账号邮箱" type="text" v-model="username"><i class="iconfont icon-youxiang"></i>
          </div>
          <div class="icon">
          <input class="icon"  placeholder="请输入密码" type="password" v-model="password"><i class="iconfont icon-mima"></i>
          </div>
          <button  @click="login">登录</button>
          <div class="else">
              <router-link :to="{name:'register'}">注册账号</router-link>
              <a href="">忘记密码</a>
          </div>
      </form>
      
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex";

import axios from "axios";
import { MessageBox } from 'mint-ui';
import router from "./router"
export default {
    data () {
        return {
            username:"1042390396@qq.com",
            password:"password"
        }
    },
   
  computed: {
      ...mapState([
          "loginimg",
         
      ]),
     
  },
  methods: {
       ...mapActions([
      "changenow"
     ]),
      login(){
          console.log(8888888);
          var _this = this;
           var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
          if(!reg.test(this.username)){
              MessageBox('提示', '邮箱格式不正确');
              return;
          }
          var regp = /^.{6,20}/;
          if(!regp.test(this.password)){
              MessageBox('提示', '密码长度必须是6-20！');
              return;
          }
          axios.post('/login',{
              username:this.username,
              password:this.password,
          })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                if(response.data==0){
                     MessageBox('提示', '登录失败!');
                }else{
                    console.log("qweqw");
                    MessageBox('提示', '登录成功！').then(actions=>{
                        console.log(_this.username);
                        localStorage.myname = _this.username;
                        _this.changenow(_this.username).then(function(){
                             router.push({name:'main'});
                        });
                        
                    });
                   
                }
            },function(error){
                 MessageBox('提示', '服务器出错了');
            })
      }
  }
}
</script>
