<template>
  <div class="intro">
    <img src="/images/intro-img.jpg" alt="" />
    <div class="intro__content">
      <h2>Burduja Sergiu</h2>
      <h3>WebDeveloper</h3>
      <Btn>
      <nuxt-link to="/services">Мои услуги</nuxt-link>
      </Btn>
    </div>
  </div>
</template>
<style lang="scss">
.intro {
  position: relative;
  height: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    filter: grayscale(1);
    opacity: 0.1;
  }
  &__content {
    position: relative;
    padding: 20rem 10rem;
    color: white;
    z-index: 2;
  }
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 400;
    text-transform: capitalize;
    letter-spacing: 8px;
  }
  h3 {
    margin-bottom: 4rem;
    font-size: 8rem;
    text-transform: uppercase;
    color: var(--accent);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
}
</style>
