<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

useHead({
  title: runtimeConfig.public.site_title + " | Обо мне",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Помимо созданных сайтов в портфолио, мной также разработаны различные калькуляторы, сложные формы обратной связи, многоуровневое меню, слайдера изображений, отзывов и тд",
    },
  ],
});
// import Skills from "@/sections/Skills";
// import SectionHeader from "@/ui/SectionHeader";
// import About from "@/sections/About";
</script>
<template>
  <div class="page-about">
    <Skills />
    <SectionHeader title="Обо мне" />
    <AboutComponent :show_btn="false" />
  </div>
</template>
<style lang="scss">
.page-about {
}
</style>
