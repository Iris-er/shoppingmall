<template>
  <div class="home-list">
    <div class="list-col">
      <div class="content" v-for="item in list" :key="item.cloth_id">
        <div class="content-img">
          <img :src="item.src" alt />
        </div>
        <div class="content-message">{{ item.title }}</div>
      </div>
    </div>
    <div class="list-col">
      <div class="content" v-for="item in list" :key="item.cloth_id">
        <div class="content-img">
          <img :src="item.src" alt />
        </div>
        <div class="content-message">{{ item.title }}</div>
      </div>
    </div>
    <div class="list-col">
      <div class="content" v-for="item in list" :key="item.cloth_id">
        <div class="content-img">
          <img :src="item.src" alt />
        </div>
        <div class="content-message">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-list',
  data () {
    return {
      list: [
        {
          cloth_id: '001',
          src: '/images/nvzhuang.png',
          title: '女装'
        },
        {
          cloth_id: '002',
          src: '/images/shangyi1.png',
          title: '男装'
        },
        {
          cloth_id: '003',
          src: '/images/shenghuoyongpin-.png',
          title: '裤子'
        },
        {
          cloth_id: '004',
          src: '/images/qunzi_.png',
          title: '裙子'
        },
        {
          cloth_id: '005',
          src: '/images/taotoushangyi.png',
          title: '上衣'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.home-list {
  width: 100%;

  .list-col {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .content {
      width: 20%;
      text-align: center;
      padding-top: 10px;

      .content-img {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 40px;
        margin: auto;

        img {
          width: 100%;
        }

        .icon {
          font-size: 30px;
        }
      }

      .content-message {
        height: 22px;
        line-height: 22px;
        font-size: 12px;
      }
    }
  }
}
</style>
