<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-md-12">
        <div class="row h-100 flex-column align-items-center justify-content-center">
          <h1 class="welcome-title ">HEARTS & WIRES</h1>
          <hr>
          <div class="navigation-bar">
            <a href="">About</a>
            <a href="">Music</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
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
      script: [{src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}],
    };
  },
}
</script>

<style>
  hr {
    border-top: 1px solid #EF26F3;
    width: 40%;
  }
</style>

