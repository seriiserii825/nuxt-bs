<script setup lang="ts">
const route = useRoute();
useHead({
  link: [{ rel: "canonical", href: "burdujasergiu.com" + route.path }],
});
const is_visible_popup = ref(false);

function showSearch() {
  const is_visible_popup = ref(true);
}
function hideSearch() {
  const is_visible_popup = ref(false);
}
onMounted(() => {
  document.addEventListener("keyup", (e) => {
    if (e.code === "Escape" && is_visible_popup) {
      hideSearch();
    }
  });
});
</script>
<template>
  <div class="default">
    <!-- <SearchPopup v-if="is_visible_popup" @hide="hideSearch"></SearchPopup> -->
    <!-- <div class="show-search" @click="showSearch"> -->
    <!--   <img src="/svg/search.svg" width="50" alt="" /> -->
    <!-- </div> -->
    <div class="default__wrap">
      <div class="default__menu">
        <!-- <div class="default__menu-logo"><Logo></Logo></div> -->
        <!-- <menu></menu> -->
      </div>
      <div class="default__content">
        <slot />
      </div>
    </div>
    <!-- <footer></footer> -->
  </div>
</template>
<style lang="scss">
.default {
  &__wrap {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
  }
  &__menu {
    padding: 15rem 4rem;
    flex: 0 0 23rem;
    background: #191919;
    &-logo {
      margin-bottom: 4rem;
      .logo {
        text-align: left;
      }
    }
  }
  &__content {
    flex: 1;
  }
}
.show-search {
  position: fixed;
  top: 3rem;
  right: 3rem;
  cursor: pointer;
  transition: all 0.4s;
  z-index: 99999;
  &:hover {
    transform: scale(0.9);
  }
}
</style>
