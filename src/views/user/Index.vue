<template>
  <div class="user">
    <van-cell-group>
      <van-field
        v-model="form.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="form.password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button size="large" type="info" @click="handleLogin">登录</van-button>
    <!-- <avatar-qrcode /> -->
    <footerr :active="active" />
  </div>
</template>
<script>
import avatarQrcode from '@/components/qrcode/avatarQrcode'
import Footerr from '@/components/footer/Footerr'
import { Field, Cell, CellGroup, Button } from 'vant'
import { login } from '@/api/home'
export default {
  name: 'User',
  components: {
    Footerr,
    'avatar-qrcode': avatarQrcode,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data () {
    return {
      active: 'user',
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      login(this.form).then(res => {
        const { code, data } = res
        if (code === 0) {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.user {
  width: 100%;
}
</style>
