<script lang="ts" setup>
import type { IHomeResponse, IPost } from "~/interfaces/IHome";
import type { IPortfolioItem } from "~/interfaces/IPortfolioResponse";

useHead({
  title: "Burduja Sergiu" + " | Главная",
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        " На моем сайте фрилансера веб-разработчика в портфолио представлены проекты, которые я разработал в течение последних шести лет как в сотрудничестве с веб-студиями так и для частных клиентов, а также несколько личных проектов.",
    },
  ],
});

const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;
const posts = ref<IPost[]>([]);
const portfolios = ref<IPortfolioItem[]>([]);
const { data } = await useFetch(`${apiBase}/home`, {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
onMounted(() => {
  if (data && data.value) {
    //@ts-ignore
    const response: IHomeResponse = data.value;
    posts.value = response.posts;
    portfolios.value = response.portfolios;
  }
});
</script>
<template>
  <div class="home">
    <HomeIntro />
    <SectionHeader title="Обо мне" />
    <About />
    <SectionHeader title="Последние посты" />
    <div class="last-posts">
      <BlogsComponent v-if="posts && posts.length" :posts="posts" />
      <div class="last-posts__btn">
        <btn>
          <NuxtLink to="/blog">Посмотреть все посты</NuxtLink>
        </btn>
      </div>
    </div>
    <SectionHeader title="Последние работы порртфолио" />
    <div v-if="portfolios && portfolios.length" class="last-portfolio">
      <PortfoliosComponent :portfolios="portfolios" />
    </div>
  </div>
</template>

<style lang="scss">
.last-posts {
  padding: 10rem;
  &__btn {
    margin-top: 6rem;
    text-align: center;
  }
}
.last-portfolio {
  padding: 10rem;
}
</style>
