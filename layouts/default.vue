<template>
  <div class="layout">
    <AppHeader />
    <Navbar :navbars="navbars" />
    <slot></slot>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "@/store/home"
import { storeToRefs } from "pinia"

const homeStore = useHomeStore()
// 在server端 发起网络请求
homeStore.fetchHomeInfoData("oppo")
const { navbars } = storeToRefs(homeStore)
</script>

<style lang="scss" scoped></style>
