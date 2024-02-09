<template>
  <div class="home">
    <div class="wrapper content">
      <Swiper :banners="banners" />
      <TabCategory :categorys="categorys" @itemClick="handleItemClick" />
      <template v-for="item in categorys">
        <SectionCategory :category="item"></SectionCategory>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useHomeStore } from "@/store/home"

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)

const router = useRouter()

function handleItemClick(item) {
  router.push({
    path: "/oppo-detail",
    query: {
      type: item.type,
    },
  })
}
</script>

<style lang="scss" scoped></style>
