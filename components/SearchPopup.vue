<script setup lang="ts">
const emits = defineEmits(["emit_popup"]);
const search = ref("");
const search_ref = ref<HTMLInputElement>();
const search_list = ref([]);
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;
function onInput() {
  if (search.value.length > 1) {
    $fetch(`${apiBase}/post?limit=20&offset=0&search=` + search.value)
      .then((res) => {
        const result = res.data;
        search_list.value = result;
      })
      .catch((error) => {
        console.log(error.response, "error.response");
      });
  } else {
    search_list.value = [];
  }
}
function hidePopup() {
  emits("emit_popup");
}
onMounted(() => {
  if (search_ref.value) {
    search_ref.value.focus();
  }
});
</script>
<template>
  <div class="search-popup">
    <header class="search-popup__header">
      <input
        v-model="search"
        @input="onInput"
        ref="search_ref"
        type="text"
        placeholder="Search..."
      />
      <button @click="hidePopup">
        <img src="/svg/close.svg" alt="" />
      </button>
    </header>
    <ul v-if="search_list.length" class="search-popup__list">
      <li @click="hidePopup" v-for="item in search_list" :key="item.id">
        <nuxt-link :to="`/post/${item.slug}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.search-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  width: 98%;
  height: 96%;
  z-index: 9999999;
  background: #000;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
  }
  input {
    display: block;
    width: 80%;
    height: 6rem;
    font-size: 2rem;
    text-indent: 2rem;
    color: white;
    background: transparent;
    border: 1px solid orangered;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  li {
    margin-bottom: 2rem;
    color: white;
    background: #222;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    border: 1px solid transparent;
    &:focus {
      border-color: orangered;
      outline: 1px solid orangered;
    }
    a {
      display: block;
      padding: 2rem;
    }
  }
}
</style>
