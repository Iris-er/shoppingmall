<template>
  <!-- 生成二维码开放接口:
           二维码内容[通常为url]
          二维码大小[限制为正方形]
　　　　　　　　二维码下方显示：文字
  二维码中间显示：图片-->
  <div id="meQrcode" :title="qrText">
    <div class="qrcode_box">
      <img class="qrcode_canvas" id="qrcode_canvas" ref="qrcode_canvas" alt="二维码本图" />
      <img v-if="qrLogo" class="qrcode_logo" ref="qrcode_logo" :src="qrLogo" alt="公司logo" />
      <canvas :width="qrSize" :height="qrSize" class="canvas" ref="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcode"
export default {
  name: 'avatar-qrcode',
  props: {
    qrUrl: {
      type: String,
      default: "http://www.baidu.com/"
    },
    qrSize: {
      type: Number,
      default: 200
    },
    qrText: {
      default: "百度一下，也不知道"
    },
    qrLogo: {
      type: String,
      default: '/images/nvzhuang.png'
    },
    qrLogoSize: {
      type: Number,
      default: 40
    },
    qrTextSize: {
      type: Number,
      default: 14
    }
  },
  methods: {
    /**
     * @argument qrUrl        二维码内容
    * @argument qrSize       二维码大小
   * @argument qrText       二维码中间显示文字
    * @argument qrTextSize   二维码中间显示文字大小(默认16px)
    * @argument qrLogo       二维码中间显示图片
   * @argument qrLogoSize   二维码中间显示图片大小(默认为80)
    */
    handleQrcodeToDataUrl () {
      let qrcode_canvas = this.$refs.qrcode_canvas
      let qrcode_logo = this.$refs.qrcode_logo
      let canvas = this.$refs.canvas
      const that = this
      QRCode.toDataURL(
        this.qrUrl,
        { errorCorrectionLevel: "H" },
        (err, url) => {
          qrcode_canvas.src = url
          // 画二维码里的logo// 在canvas里进行拼接
          let ctx = canvas.getContext("2d")
          setTimeout(() => {
            //获取图片
            ctx.drawImage(qrcode_canvas, 0, 0, that.qrSize, that.qrSize)
            if (that.qrLogo) {
              //设置logo大小
              //设置获取的logo将其变为圆角以及添加白色背景
              ctx.fillStyle = "#fff"
              ctx.beginPath()//	起始一条路径，或重置当前路径
              let logoPosition = (that.qrSize - that.qrLogoSize) / 2 //logo相对于canvas居中定位
              let h = that.qrLogoSize + 10 //圆角高 10为基数(logo四周白色背景为10/2)
              let w = that.qrLogoSize + 10 //圆角宽
              let x = logoPosition - 5
              let y = logoPosition - 5
              let r = 5 //圆角半径
              ctx.moveTo(x + r, y)//把路径移动到画布中的指定点，不创建线条
              ctx.arcTo(x + w, y, x + w, y + h, r)
              ctx.arcTo(x + w, y + h, x, y + h, r)
              ctx.arcTo(x, y + h, x, y, r)//创建两切线之间的弧/曲线
              ctx.arcTo(x, y, x + w, y, r)
              ctx.closePath()//创建从当前点回到起始点的路径
              ctx.fill()//填充当前绘图（路径）
              ctx.drawImage(
                qrcode_logo,
                logoPosition,
                logoPosition,
                that.qrLogoSize,
                that.qrLogoSize
              )
            }
            if (that.qrText) {
              //设置字体
              let fpadd = 10 //规定内间距
              ctx.font = "bold " + that.qrTextSize + "px Arial"
              let tw = ctx.measureText(that.qrText).width //文字真实宽度
              let ftop = that.qrSize - that.qrTextSize //根据字体大小计算文字top
              let fleft = (that.qrSize - tw) / 2 //根据字体大小计算文字left
              let tp = that.qrTextSize / 2 //字体边距为字体大小的一半可以自己设置
              ctx.fillStyle = "#fff"
              //	绘制“被填充”的矩形
              ctx.fillRect(
                fleft - tp / 2,
                ftop - tp / 2,
                tw + tp,
                that.qrTextSize + tp
              )
              ctx.textBaseline = "top" //设置绘制文本时的文本基线。
              ctx.fillStyle = "#333"
              //	在画布上绘制“被填充的”文本
              // ctx.fillText(that.qrText, fleft, ftop)
            }
            canvas.style.display = "none"
            qrcode_canvas.src = canvas.toDataURL()
            qrcode_canvas.style.display = "inline-block"
          }, 0)
        }
      )
    }
  },
  mounted () {
    this.handleQrcodeToDataUrl()
  },
  updated () {
    this.handleQrcodeToDataUrl()
  },
}
</script>
<style lang="stylus" scoped>
.qrcode_box, #meQrcode {
  display: inline-block;
}

.qrcode_box img {
  display: none;
}
</style>