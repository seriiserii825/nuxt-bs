<script setup lang="ts">
import type {IPortfolio} from '~/interfaces/IHome';

const props = defineProps({
    portfolios: {
      type: Array as PropType<IPortfolio[]>,
      required: true
    }
});
</script>
<template>
  <div class="portfolios" v-if="portfolios && portfolios.length">
    <div class="portfolios__wrap">
      <PortfolioComponent v-for="item in portfolios" :item="item" :key="item.id"/>
    </div>
  </div>
</template>
<style lang="scss">
.portfolios {
  &__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
    grid-gap: 4rem;
  }
}
</style>
