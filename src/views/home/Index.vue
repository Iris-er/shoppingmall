<template>
  <div class="home">
    <div class="header">
      <div>
        <i class="iconfont icon">&#xe609;</i>
      </div>
      <div class="header-search">
        <van-search placeholder="请输入搜索关键词" v-model="value" />
      </div>
      <div>
        <i class="iconfont message">&#xe621;</i>
      </div>
    </div>
    <div class="content">
      <div class="banners">
        <van-swipe :autoplay="3000" indicator-color="red">
          <van-swipe-item v-for="item in banners" :key="'banner'+item.value">
            <img :src="item.src" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <home-list />
    </div>

    <footerr :active="active" />
  </div>
</template>
<script>
import Footerr from '@/components/footer/Footerr'
import homeList from '@/components/home/homeList'
import { Button, Icon, Search, Swipe, SwipeItem } from 'vant'
export default {
  name: 'home',
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    Footerr,
    'home-list': homeList
  },
  data () {
    return {
      active: 'home',
      value: '',
      banners: [
        {
          value: '1',
          src: 'https://s18.mogucdn.com/mlcdn/c45406/191023_3h8h4dfa5447660446ae80e032198_1125x390.jpg_750x9999.v1c7E.81.webp'
        },
        {
          value: '2',
          src: 'https://s17.mogucdn.com/mlcdn/c45406/191023_69f4i4a91k1id5dhhdi22kgi3hg29_1125x390.jpg_750x9999.v1c7E.81.webp'
        },
        {
          value: '3',
          src: 'https://s2.mogucdn.com/mlcdn/c45406/191025_3g4h23k0b90b33578l8f8b4fajj08_1125x390.jpg_750x9999.v1c7E.81.webp'
        },
        {
          value: '4',
          src: 'https://s2.mogucdn.com/mlcdn/c45406/191023_6l5k50hhi252b6ji97l00h2c59i26_1125x390.jpg_750x9999.v1c7E.81.webp'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.home {
  width: 100%;

  .header {
    width: 355px;
    height: 40px;
    line-height: 40px;
    background-color: #f3a07c;
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 16px;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;

    .icon {
      font-size: 18px;
    }

    .message {
      font-size: 22px;
    }

    .header-search {
      width: 280px;
      height: 25px;
      margin: auto;

      .van-search {
        height: 100%;
        padding: 0;

        .van-cell {
          padding: 0;
          font-size: 12px;
        }
      }
    }
  }

  .content {
    position: absolute;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: white;

    .banners {
      width: 100%;
      height: 130px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
