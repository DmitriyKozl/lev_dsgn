<template>
    <div class="navigation screen">
      <div class="square"></div>
      <nav>
        <g-link to="/home#about">About</g-link>
        <g-link to="/work/">Work</g-link>
        <g-link to="/home#contact">Contact</g-link>
      </nav>
    </div>
   
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style  lang="scss">
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation.screen {
  max-width: 1200px;
  // margin: auto;
  padding-top: 1rem;
  position: fixed;
  width: 70%;
  // height: 100px;
  top: 1rem;
  left: 5rem;

  nav {
    @include center;
    width: 500px;
    height: 50px;
    padding: 0 2rem;
    background: #ffc7c7;
    position: relative;
    z-index: 33;
    box-shadow: 1px 1px 3px 0px rgba(161, 161, 161, 1);

    a {
      padding: 0 4rem;
      font-size: 1.5rem;
      font-family: "bahnschrift";
      cursor: pointer;
    }
  }
  .square {
    width: 500px;
    height: 50px;
    padding: 0 2rem;
    background: transparent;
    border: 2.5px solid #0073b6;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0.5rem;
  }
}
</style>
