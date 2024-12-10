<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const runtimeConfig = useRuntimeConfig();
const server_url = runtimeConfig.public.server_url;
</script>
<template>
  <div class="portfolio">
    <img :src="`${server_url}${item.image}`" alt="" />
    <div class="portfolio__content">
      <h2 class="portfolio__title">{{ item.title }}</h2>
      <div class="portfolio__type" v-if="item.taxonomy">{{ item.taxonomy.title }}</div>
      <btn size="small" bg="dark">
        <NuxtLink :to="`/portfolio/${item.slug}`">Посмотреть</NuxtLink>
      </btn>
    </div>
  </div>
</template>
<style lang="scss">
.portfolio {
  position: relative;
  padding: 3rem;
  height: 18rem;
  overflow: hidden;
  &:hover {
    &::before {
      opacity: 1;
    }
    .portfolio__title {
      top: 0;
      opacity: 1;
    }
    .portfolio__type {
      top: 0;
      opacity: 1;
    }
    .btn {
      top: 0;
      opacity: 1;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    opacity: 0;
    transition: all 0.4s;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  &__content {
    position: relative;
    padding-top: 3%;
    z-index: 3;
  }
  &__title {
    position: relative;
    top: -8rem;
    margin-bottom: 2rem;
    transition: all 0.4s;
    opacity: 0;
  }
  &__type {
    position: relative;
    top: -8rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    transition: all 0.4s;
    opacity: 0;
  }
  .btn {
    position: relative;
    top: 8rem;
    transition: all 0.4s;
    opacity: 0;
  }
}
</style>
