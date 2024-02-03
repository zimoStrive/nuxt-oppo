<template>
  <div class="navbar">
    <div class="wrapper content">
      <NuxtLink to="/" class="content-left">
        <img src="~/assets/images/logo.png" class="logo" alt="" />
        <h1 class="title">OPPO官网</h1>
      </NuxtLink>
      <ul class="content-center">
        <li
          :class="currentIndex == index ? 'active' : ''"
          v-for="(item, index) in navbars"
          :key="index"
          @click="handlerItemClick(index)"
        >
          <NuxtLink class="link" :to="getPagePath(item)">{{ item.title }}</NuxtLink>
        </li>
      </ul>

      <Search class="content-right"></Search>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { INavBar } from "@/store/home"

export interface IProps {
  navbars: INavBar[]
}

const props = withDefaults(defineProps<IProps>(), {
  navbars: () => [],
})

const currentIndex = ref<number>(0)

const handlerItemClick = (index: number) => {
  currentIndex.value = index
}

const getPagePath = computed(() => {
  return (item: INavBar) => {
    let path = "/"
    if (item.type !== "oppo") {
      path += item.type
    }
    return path
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  height: $navBarHeight;
  z-index: 99;
  border-bottom-color: rgba(0, 0, 0, 0.06);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  /* 吸顶 */
  @include elementSticky(36px);
  background-color: white;

  .content {
    height: 100%;
    /* @include border(); */
    @include normalFlex();
    justify-content: center;
    align-items: center;

    .content-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;
      .logo {
        height: 100%;
      }
      .title {
        text-indent: -1000px;
        height: 0;
        margin: 0;
      }
    }

    .content-center {
      @include normalFlex();
      width: 530px;
      margin-left: 60px;

      .link {
        font-size: 14px;
        color: #000;
        opacity: 0.55;
      }
      .link:hover {
        opacity: 1;
      }
      .active .link {
        opacity: 1;
      }
    }

    .content-right {
      margin-left: 50px;
    }
  }
}
</style>
