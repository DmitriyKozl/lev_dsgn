<template>
  <div class="navigation">
    <div class="square"></div>
    <nav>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped lang="scss">
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation{
   max-width: 1200px;
  margin:  auto;
  padding-top: 2rem;
  position: fixed;
  width: 70%;
left: 7rem;  height: 70px;

nav {
    @include center;
  width: 500px;
  height: 70px;
  padding: 0 2rem;
  background:#FFC7C7 ;
  position: relative;
    z-index: 33;
    box-shadow: 1px 1px 3px 0px rgba(161,161,161,1);

  a {
    padding: 0 4rem;
    font-size: 1.5rem;
    font-family: "bahnschrift";
    cursor: pointer;
  }
}
.square{
    width: 500px;
  height: 70px;
  padding: 0 2rem;
  background:transparent ;
  border: 2.5px solid #0073B6;
  position: absolute;
  z-index: 0;
  top:2.5rem;
  left: 0.5rem;
}
}
</style>
