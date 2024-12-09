<script setup lang="ts">
const route = useRoute();
function isRouteActive(str: string) {
  const router_path = route.path;
  return router_path.includes(str);
}
isRouteActive("blog");
</script>
<template>
  <ul class="menu">
    <li><nuxt-link to="/">Главная</nuxt-link></li>
    <li><nuxt-link to="/about">Обо мне</nuxt-link></li>
    <li>
      <nuxt-link
        to="/blog"
        :class="{ 'nuxt-link-exact-active': isRouteActive('post') }"
        >Блог</nuxt-link
      >
    </li>
    <li><nuxt-link to="/services">Услуги</nuxt-link></li>
    <li>
      <nuxt-link
        to="/portfolio"
        :class="{ 'nuxt-link-exact-active': isRouteActive('portfolio') }"
        >Портфолио</nuxt-link
      >
    </li>
  </ul>
</template>
<style lang="scss">
.menu {
  a {
    position: relative;
    display: inline-block;
    margin-bottom: 3rem;
    font-size: 1.8rem;
    color: white;
    &:hover {
      &::before {
        opacity: 1;
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 1rem;
      right: -3rem;
      width: 2rem;
      height: 2px;
      background-color: var(--accent);
      opacity: 0;
      transition: all 0.4s;
    }
    &.nuxt-link-exact-active {
      color: var(--accent);
      &::before {
        opacity: 1;
      }
    }
  }
}
</style>
