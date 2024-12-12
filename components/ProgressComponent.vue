<script setup lang="ts">
const props = defineProps({
  percent: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  logo_url: {
    type: String,
    required: true,
  },
});

const full = ref(560);
const current = ref(0);
const current_color = ref("#ff8d00");
onMounted(() => {
  setTimeout(() => {
    current.value = (full.value * +props.percent) / 100;
  });
  current_color.value = props.color ? props.color : current_color.value;
});
</script>
<template>
  <div class="progress">
    <h3 class="progress__title">{{ title }}</h3>
    <div class="progress__svg">
      <svg
        width="200"
        height="200"
        class="chart-container"
        :style="`stroke-dasharray: ${current}, 1000;`"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          :style="`stroke: ${current_color}`"
          class="svg"
        ></circle>
      </svg>
      <div class="progress__percent">{{ percent }} %</div>
      <img class="progress__logo" :src="logo_url" alt="" />
    </div>
  </div>
</template>
<style lang="scss">
.progress {
  &__title {
    margin-bottom: 2rem;
  }
  &__svg {
    position: relative;
    margin-bottom: 3rem;
    width: 20rem;
    height: 20rem;
    .svg {
      position: relative;
      //stroke: #ff8d00;
      stroke-width: 10;
      stroke-linecap: round;
      transform: rotate(90deg);
      transform-origin: center;
      z-index: 1;
      transition: all 3s ease-out;
    }
  }
  &__logo {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6rem;
    height: 6rem;
  }
  &__percent {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
  }
}
</style>
