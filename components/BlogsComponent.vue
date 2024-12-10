<script setup lang="ts">
import type { IPost } from "~/interfaces/IHome";

const props = defineProps({
  posts: {
    type: Array as PropType<IPost[]>,
    default() {
      return [];
    },
  },
  count: {
    type: Number,
    default: 0,
  },
  align: {
    type: String,
    default: "center",
  },
});

const runtimeConfig = useRuntimeConfig();
const server_url = runtimeConfig.public.server_url;
</script>
<template>
  <div
    class="blogs"
    v-if="posts && posts.length > 0"
    :style="`justify-content: ${align}`"
  >
    <div class="blogs__item" v-for="post in posts" :key="post.id">
      <BlogComponent
        :id="post.id"
        :slug="post.slug"
        :title="post.title"
        :date="post.created_at"
        :img_url="`${server_url}/${post.category.image}`"
      />
    </div>
  </div>
  <h3 v-else>No posts found</h3>
</template>
<style lang="scss">
.blogs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  justify-content: center;
  grid-gap: 2rem;
}
</style>
