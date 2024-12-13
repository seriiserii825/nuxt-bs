<script setup lang="ts">
import type { IPortfolioItem } from "~/interfaces/IPortfolioResponse";

const props = defineProps({
  portfolios: {
    type: Array as PropType<IPortfolioItem[]>,
    required: true,
  },
});
</script>
<template>
  <div class="portfolios" v-if="portfolios && portfolios.length">
    <div class="portfolios__wrap">
      <PortfolioComponent
        v-for="item in portfolios"
        :item="item"
        :key="item.id"
      />
    </div>
    <div class="last-posts__btn">
      <Btn v-if="$route.path === '/'">
        <NuxtLink to="/portfolio">Посмотреть все работы</NuxtLink>
      </Btn>
    </div>
  </div>
</template>
<style lang="scss">
.portfolios {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: 1.6rem;
  }
}
</style>
