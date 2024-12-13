<script setup lang="ts">
import type { IPortfolioResponse } from "~/interfaces/IPortfolioResponse";

// import PortfoliosComponent from "@/elements/PortfoliosComponent";
// import Btn from "@/ui/Btn";
// import SectionHeader from "@/ui/SectionHeader";
// import PortfolioComponent from "@/elements/PortfolioComponent";
// import VuePaginate from "vuejs-paginate/src/components/Paginate.vue";
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
// async asyncData({ store }) {
//   try {
//     await store.dispatch("taxonomy/fetchData");
//     await store.dispatch("portfolio/fetchData", {
//       taxonomy_id: 0,
//       offset: 0,
//       limit: 4,
//     });
//     let data = store.state["taxonomy"].data;
//     let portfolios = store.state["portfolio"].data;
//
//     return {
//       taxonomies: data.data,
//       portfolios: portfolios.data ? portfolios.data : [],
//       total: portfolios.total,
//     };
//   } catch (e) {
//     console.log(e, "e");
//     return { error: e };
//   }
// },
async function filterByTaxonomy(id: number) {
  taxonomy_id.value = id;
  page.value = 1;
  // await $store.dispatch("portfolio/fetchData", {
  //   limit: per_page,
  //   offset: 0,
  //   taxonomy_id: id,
  // });
  // portfolios.value = await this.$store.state["portfolio"].data.data;
  // total.value = this.$store.state["portfolio"].data.total;
}
async function goToPage(page_num: number) {
  page.value = page_num;
  // await this.$store.dispatch("portfolio/fetchData", {
  //   limit: this.per_page,
  //   offset: (page - 1) * this.per_page,
  //   taxonomy_id: this.taxonomy_id,
  // });
  // this.portfolios = this.$store.state["portfolio"].data.data;
}
async function onSearch() {
  // await this.$store.dispatch("portfolio/fetchData", {
  //   limit: this.per_page,
  //   offset: (this.page - 1) * this.per_page,
  //   taxonomy_id: this.taxonomy_id,
  //   search: this.search,
  // });
  // this.portfolios = this.$store.state["portfolio"].data.data;
  // this.total = this.$store.state["portfolio"].data.total;
}
const total_pages = computed(() => {
  return Math.ceil(total.value / per_page.value);
});
onMounted(() => {
  if (data.value) {
    taxonomies.value = data.value.taxonomies;
    portfolios.value = data.value.data;
    // total.value = data.value.total;
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
        <btn><span @click="filterByTaxonomy(0)">All</span></btn>
        <btn v-for="category in taxonomies" :key="category.id">
          <span @click="filterByTaxonomy(category.id)">{{
            category.title
          }}</span>
        </btn>
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
.portfolios {
  &__wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.8rem;
  }
  &__item {
    margin: 0 0.8rem 1.6rem;
    flex: 0 0 calc(25% - 1.6rem);
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
