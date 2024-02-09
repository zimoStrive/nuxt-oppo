<template>
  <div class="container">
    <ElCarousel :interval="4000" trigger="click" height="480px" indicator-position="none" @change="handleChange">
      <ElCarouselItem v-for="item in banners" :key="item.id">
        <img :src="item.picStr" />
      </ElCarouselItem>
    </ElCarousel>

    <!-- 自定义指示器 -->
    <ul class="dots">
      <li
        v-for="(item, index) in banners"
        :class="['dot', currentIndex === index ? 'active' : '']"
        :key="index"
        @click="handleDotsChange(index)"
      ></li>
    </ul>
  </div>
</template>

<script setup>
import { ElCarousel, ElCarouselItem } from "element-plus"

const props = defineProps({
  banners: {
    type: Array,
    default: () => [],
  },
})

const currentIndex = ref(0)
const handleChange = (index) => {
  currentIndex.value = index
}
const handleDotsChange = (index) => {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 36px;
  position: relative;
  .pic-str {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .dots {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    text-align: center;

    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      margin-right: 10px;
      background-color: #fff;
      opacity: 0.8;
    }
    .active {
      background-color: transparent;
      border: 2px solid #fff;
      width: 12px;
      height: 12px;
      position: relative;
      top: 1px;
    }
  }
}
</style>
