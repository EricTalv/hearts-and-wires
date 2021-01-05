<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-md-12">
        <div class="row h-100 align-items-center justify-content-center">
            <h1 class="welcome-title ">HEARTS & WIRES</h1>
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

</style>

