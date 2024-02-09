<template>
  <div class="section-category">
    <SectionTitle :title="category.title" />
    <GridView :product-details="category.productDetailss" :category-url="category.url" />
  </div>
</template>

<script setup lang="ts">
import type { ICategory } from "@/store/home"

interface IProps {
  category?: ICategory
}

const { category = {} } = defineProps<IProps>()
</script>
