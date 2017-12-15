<template>
  <div>
      
      <router-view></router-view>
      <footer class="main-footer">
        <ul>
          <li><router-link :to="{name:'diary'}"><i class="iconfont icon-riji"></i><span>日记</span></router-link></li>
          <li><router-link :to="{name:'passer'}"><i class="iconfont icon-caidan"></i><span>过客</span></router-link></li>
          <li><router-link :to="{name:'my'}"><i class="iconfont icon-wode"></i><span>我的</span></router-link></li>
        </ul>
      </footer>
  </div>
</template>
<script>
export default {
  
}
</script>