<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-md-12">
        <div class="row h-100 flex-column align-items-center justify-content-center">
          <h1 class="welcome-title ">HEARTS & WIRES</h1>
          <hr>
          <div class="nav-buttons">
            <button>About</button>
            <button>Music</button>
            <button>Blog</button>
            <button>Contact</button>
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
    border-color: #6f0071;
    width: 40%;
  }

  .welcome-title {
    font-family: "Tulpen One", cursive;
    color: #EF26F3;
    font-size: 5vw;
    font-weight: bold;
    margin: 0;
  }
</style>

