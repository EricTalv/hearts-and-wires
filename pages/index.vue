<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-12">
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
    <div class="row justify-content-center align-items-center">
      <div class="col-9">
        <h1 class="about-title">About Us</h1>
          <img class="about-img float-left" src="../assets/images/phototogether.jpg" alt="">
          <div class="about-paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ipsa. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ad aspernatur, aut beatae cupiditate delectus dicta distinctio doloribus
              earum
              eos expedita iste labore magni minima minus modi, necessitatibus obcaecati omnis porro quis quisquam quos
              reiciendis repudiandae suscipit tempore, veniam! Adipisci, commodi dolore eligendi eos inventore
              laudantium
              nostrum reiciendis repellendus ut velit.</p>
        </div>
      </div>

    </div>
    <br>
    <br>
  </div>

</template>

<script>


export default {

  head() {
    return {
      script: [{src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'}],
    };
  },


}
</script>

<style lang="css" scoped>

h1, p {
  font-family: "Tulpen One", cursive;
  color: #EF26F3;
}

h1 {
  font-size: 10vw;
}

p {
  font-size: 2.5vw;
}

hr {
  border-color: #6f0071;
  width: 40%;
}

.about-title {
  border-bottom: 1px solid;
  margin-bottom: 15px;
}

.about-paragraph {
  background-color: rgb(0 0 0 / 50%);
  margin-left: 37vw;
  padding: 11px;
}

.about-paragraph > p {
  margin: 0;
}

.about-img {
  -webkit-box-shadow: 0px 4px 14px 3px rgba(239, 38, 243, 0.31);
  box-shadow: 0px 4px 14px 3px rgba(239, 38, 243, 0.31);
  width: 35vw;
}

.welcome-title {
  font-family: "Tulpen One", cursive;
  color: #EF26F3;
  font-size: 20vw;
  font-weight: bold;
  margin: 0;
  padding: 0;
}

.nav-buttons > button {
  background-color: transparent;
  font-family: "Tulpen One", cursive;
  color: #EF26F3;
  font-size: 6vw;
  border: 0;
  outline: none;
  transition: all 0.5s;
}

.nav-buttons > button:hover {
  color: #35d4bc;
  margin: 0px 5px 0px 5px;
}

@media screen and (max-width: 500px) {
  .nav-buttons {
    display: flex;
    flex-flow: column;
  }

  .nav-buttons > button {
    font-size: 15vw;
  }
}

</style>

