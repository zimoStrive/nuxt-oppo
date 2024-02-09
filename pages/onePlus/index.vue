<template>
  <div class="one-plus">
    <div class="wrapper content">
      <Swiper :banners="data?.data.banners"></Swiper>
      <TabCategory :categorys="data?.data.categorys" @item-click="handleItemClick"></TabCategory>
      <template v-for="item in data?.data.categorys">
        <SectionCategory :category="item" v-if="item.productDetailss?.length"></SectionCategory>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getHomeOnePlusInfo } from "@/service/home"
const { data } = await getHomeOnePlusInfo()
function handleItemClick(item: any) {}
</script>

<style lang="scss" scoped>
.one-plus {
  background-color: $bgGrayColor;
}
</style>
