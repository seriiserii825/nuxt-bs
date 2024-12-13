<script setup lang="ts">
const props = defineProps({
  show_btn: {
    type: Boolean,
    default: true,
  },
});
const img_changed = ref(false);
onMounted(() => {
  setTimeout(() => {
    img_changed.value = true;
  }, 1000);
});
</script>

<template>
  <div class="about">
    <div class="about__img" :class="{ active: img_changed }">
      <img src="/images/serii.jpg" alt="" />
    </div>
    <div class="about__content">
      <h2 class="about__title title">Fullstack Developer</h2>
      <div class="about__text">
        <p>
          На моем сайте фрилансера веб-разработчика в портфолио представлены
          проекты, которые я разработал в течение последних шести лет как в
          сотрудничестве с веб-студиями так и для частных клиентов, а также
          несколько личных проектов.
        </p>
        <p>
          Большинство из этих сайтов были разработаны с использованием CMS
          Joomla, CMS WordPress. Основная масса проектов содержит индивидуальные
          функции предназначенные для реализации особенностей работы веб-сайта.
        </p>
        <p>
          Помимо созданных сайтов в портфолио, мной также разработаны различные
          калькуляторы, сложные формы обратной связи, многоуровневое меню,
          слайдера изображений, отзывов и тд., множество обновлений CMS на новую
          версию с переносом всего контента со старой с сохранением функционала
          веб-сайта, исправлений различных ошибок на сайтах, оптимизация
          загрузки сайта, наполнение сайта до 15000 товаров, материалом
          (текстовой информацией) и многое другое... Источник:
          http://coder-oldboy.com/
        </p>
      </div>
      <Btn v-if="show_btn"><router-link to="/about">Обо мне</router-link></Btn>
    </div>
  </div>
</template>
