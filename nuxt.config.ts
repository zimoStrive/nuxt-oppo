// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite"
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/global.scss", "~/assets/css/iconfont.css"],
  build: {
    // babel转义
    transpile: ["element-plus/es"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/variables.scss"  as * ;',
        },
      },
    },
    // 实现样式导入
    plugins: [ElementPlus()],
  },
  // 注册了一个 pinia 模块(自动导包)
  modules: [
    // ...
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore", // import { defineStore } from 'pinia'
          "storeToRefs", // import { storeToRefs } from 'pinia'
        ],
      },
    ],
  ],
  app: {
    head: {
      meta: [
        {
          name: "description",
          content: "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      noscript: [{ children: "Javascript is required" }],
    },
  },
})
