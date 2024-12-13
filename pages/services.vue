<script setup lang="ts">
import services_text from "~/text/services";
const runtimeConfig = useRuntimeConfig();
useHead({
  title: runtimeConfig.public.site_title + " | Услуги",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Vue (произносится /vjuː/, примерно как view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. В отличие от фреймворков-монолитов",
    },
  ],
});
</script>
<template>
  <div class="page-services">
    <section-header title="Мои преимущества" subtitle="Услуги" />
    <div class="page-services__wrap">
      <div
        class="page-services__item"
        v-for="{ title, text, icon, url } in services_text"
        :key="title"
      >
        <Service :url="url" :title="title" :text="text">
          <img :src="icon" alt="" />
        </Service>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.page-services {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    grid-gap: 8rem;
    padding: 8rem;
  }
  &__item {
    padding: 4rem;
    box-shadow: 0 4px 14px -2px rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    overflow: hidden;
  }
}
</style>
