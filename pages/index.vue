<template>
  <div class="container h-100">

    <div class="row h-100">
      <div class="col-md-12">
        <div class="row h-100 align-items-center">
          <div class="col-md-8 ">
            <h3>
              <h1 class="welcome-title">HEARTS & WIRES</h1>
            </h3>
          </div>
          <div class="col-md-1 vr">
          </div>
          <div class="col-md-3">
            <div class="btn-group btn-group-vertical" role="group">
              <div class="nav-buttons d-flex flex-column align-items-start">
                <button>About</button>
                <button>Music</button>
                <button>Blog</button>
                <button>Contact</button>
              </div>
            </div>
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
  .hw-title {
    font-family: "Tulpen One", cursive;
    font-size: 20rem;
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: #EF26F3;

  }
</style>

