<template>
  <div class="footerr">
    <van-tabbar
      active-color="#f14e07"
      inactive-color="#000"
      class="footer-list"
      v-model="activeName"
    >
      <van-tabbar-item to="/" name="home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/user" name="user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'footerr',
  props: ['active'],
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      activeName: 'home'
    }
  },
  mounted () {
    this.activeName = this.active
  },
  watch: {
    active () {
      this.activeName = this.active
    }
  }
}
</script>
<style lang="stylus" scoped>
.footerr {
  width: 100%;

  .footer-list {
    position: fixed;
    bottom: 0;
    z-index: 99;
    height: 50px;
    overflow: hidden;
    background-color: #f3f3f3;
  }
}
</style>
