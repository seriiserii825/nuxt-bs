<script setup lang="ts">
import type { IPortfolioResponse } from "~/interfaces/IPortfolioResponse";
const runtimeConfig = useRuntimeConfig();

useHead({
  title: runtimeConfig.public.site_title + " | Портфолио",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "С помощью грамотно составленного портфолио работодатель сможет объективно оценить уровень профессионализма потенциального работника.",
    },
  ],
});

const page = ref(1);
const per_page = ref(4);
const taxonomies = ref(<IPortfolioResponse["taxonomies"]>[]);
const taxonomy_id = ref(0);
const search = ref("");
const search_ref = ref(null);
const total = ref(0);
const { data } = useFetch(`${runtimeConfig.public.apiBase}/portfolio`);
const portfolios = ref<IPortfolioResponse["data"]>([]);
async function filterByTaxonomy(id: number) {
  taxonomy_id.value = id;
  page.value = 1;
  const url = `${runtimeConfig.public.apiBase}/portfolio-filter?taxonomy_id=${id}`;
  const response = await $fetch(url); console.log(response, "response");
  if (response) {
    portfolios.value = response.data;
    total.value = response.total;
  }
}
async function goToPage(page_num: number) {
  page.value = page_num;
}
async function onSearch() {}
const total_pages = computed(() => {
  return Math.ceil(total.value / per_page.value);
});
onMounted(() => {
  if (data.value) {
    taxonomies.value = data.value.taxonomies;
    portfolios.value = data.value.data;
    total.value = data.value.total;
    console.log(total_pages, "total_pages");
  }
});
</script>
<template>
  <div class="page-portfolio">
    <section-header title="Все работы" />
    <div class="page-portfolio__wrap">
      <div class="admin-search">
        <input
          ref="search_ref"
          type="text"
          placeholder="Search..."
          v-model="search"
          @input="onSearch"
        />
      </div>
      <div
        class="page-portfolio__filter"
        v-if="taxonomies && taxonomies.length"
      >
        <Btn><span @click="filterByTaxonomy(0)">All</span></Btn>
        <Btn v-for="category in taxonomies" :key="category.id">
          <span @click="filterByTaxonomy(category.id)">{{
            category.title
          }}</span>
        </Btn>
      </div>
      <div class="portfolios" v-if="portfolios && portfolios.length">
        <PortfoliosComponent :portfolios="portfolios" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.page-portfolio {
  &__wrap {
    padding: 6.4rem 3.2rem;
  }
  &__filter {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 6rem;
    gap: 1.6rem;
  }
}

.admin-search {
  position: relative;
  margin-bottom: 2rem;
  z-index: 10;
  input {
    padding: 0 1rem;
    width: 50rem;
    height: 5rem;
    color: white;
    background: black;
    border: 1px solid #d2570a;
    border-radius: 0.4rem;
  }
}
</style>
