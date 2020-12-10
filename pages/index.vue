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
    font-size: 20rem;

    color: rgba(0,0,0,0.9);
    text-shadow:
      3px 3px 0 #EF26F3,
      -1px -1px 0 #EF26F3,
      1px -1px 0 #EF26F3,
      -1px 1px 0 #EF26F3,
      1px 1px 0 #EF26F3;

  }
</style>

