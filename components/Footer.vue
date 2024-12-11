<template>
  <div class="footer">
    <div class="logo">
      <IconsILogo />
    </div>
    <p>
      Copyright {{ new Date().getFullYear() }} portfolio. All rights reserved
    </p>
  </div>
</template>
<style lang="scss">
.footer {
  padding: 6rem 3rem;
  text-align: center;
  background-color: black;
  .logo {
    display: block;
    margin-bottom: 3rem;
  }
}
</style>
