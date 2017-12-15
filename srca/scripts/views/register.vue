<template>
  <div class="register">
      <img :src="loginimg" alt="">
      <p>吾记</p>
      <form action="">
     
         <div class="icon">
          <input   placeholder="请输入账号邮箱" type="text" v-model="username"><i class="iconfont icon-youxiang"></i>
          </div>
          <div class="icon">
          <input class="icon"  placeholder="请输入密码" type="password" v-model="password"><i class="iconfont icon-mima"></i>
          </div>
          <mt-button @click.native="register">注册</mt-button>
        
          <p>注册即代表您同意吾记用户条款</p>
      </form>
    <router-link :to="{name:'login'}" class="back">
        <i class="iconfont icon-cuowu"></i>
    </router-link>
  </div>
</template>
<script>
import {mapState} from "vuex";
import axios from "axios";
import { MessageBox } from 'mint-ui';
import router from "./router"
export default {
    data () {
        return {
            username:"username",
            password:"password",
        }
    },
  computed: {
      ...mapState([
          "loginimg",
         
      ])
  },
  methods: {
      register(){
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
          axios.post('/register',{
              username:this.username,
              password:this.password,
          })
            .then(function (response) {
                console.log(response);
                console.log(response.data);
                if(response.data==0){
                     MessageBox('提示', '该用户已经注册!');
                }else{
                    MessageBox('提示', '注册成功！').then(actions=> {
                         router.push({name:'login'})
                    });
                   
                }
            },function(error){
                 MessageBox('提示', '服务器出错了');
            })
      }
  }
}
</script>
