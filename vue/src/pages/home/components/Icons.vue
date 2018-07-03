<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import Swiper from '../../../../node_modules/vue-awesome-swiper/src/swiper.vue'

  export default {
    components: {Swiper},
    name: 'HomeIcons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
    computed: {
      pages () {
        const pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        });
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: 0.1rem
  .icon
    overflow: hidden
    padding-bottom: 25%
    float: left
    width: 25%
    height: 0
    position: relative
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.03rem
      .icon-img-content
        display block
        margin: 0 auto
        height: 100%
    .icon-desc
      line-height: 0.44rem
      height: 0.44rem
      color: $darkTextColor
      position: absolute
      left: 0
      right: 0
      bottom: 0
      text-align center
      ellipsis()
</style>

