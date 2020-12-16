<template>
  <div class="container">
    <div class="row justify-content-center" style="display:flex; justify-content: center">
      <h1 class="hw-title">HEARTS&WIRES</h1>
    </div>
  </div>
</template>

<script>
export default {
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

