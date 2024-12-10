<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="section-header">
    <h2 class="section-header__title">{{ title }}</h2>
    <h3 v-if="subtitle" class="section-header__subtitle">{{ subtitle }}</h3>
  </div>
</template>
<style lang="scss">
.section-header {
  padding: 2rem;
  text-align: center;
  background-color: #121212;
  &__title {
    margin-bottom: 0.8rem;
    font-size: 1.8rem;
    font-weight: normal;
  }
  &__subtitle {
    font-size: 3.2rem;
    font-weight: 700;
    text-transform: capitalize;
  }
}
</style>
