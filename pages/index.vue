<template>
  <div class="container">
    <div class="row">
      <Logo></Logo>
    </div>
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'

export default {
  components: {
     Logo
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
}
</script>

<style>
  .hw-title {
    font-family: "Tulpen One", cursive;
    font-size: 20rem;
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #EF26F3;

  }
</style>

