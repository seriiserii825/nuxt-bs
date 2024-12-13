<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "",
  },
  bg: {
    type: String,
    default: "",
  },
  active : {
    type: Boolean,
    default: false
  }
});
</script>
<template>
  <div
    class="btn"
    :class="{ small: size === 'small', dark: props.bg === 'dark', active: props.active }"
  >
    <slot />
  </div>
</template>
<style lang="scss">
.btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  background: var(--accent);
  border: 1px solid hsla(0, 0%, 40%, 0.8);
  border-radius: 50px;
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background: var(--accent-dark);
  }
  &.small {
    font-size: 1.2rem;
  }
  &.dark,
  &.active{
    background-color: #000;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.4rem;
    height: 100%;
  }
}
</style>
