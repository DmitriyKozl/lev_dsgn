<template>
  <Layout>
    <section class="about" id="about">
      <div class="about_guy">
        <div  class="about_guy_image"></div>

        <div class="about_guy_text">
          <div class="circle"></div>
          <div class="outline"></div>
          <h2>About</h2>

          <p>
            Strong and creative communications professional with a Ba in
            Communication Management and a fingerspitzengefühl for Lay-Out and
            Graphic Design... that's German for being damn good. I am Daan, born
            in '98 and ready for some hands-on experience in communications! I
            love creating content from scratch that is simple, efficient, and
            easy-going. Oh and it has to look nice as well, that's a must. For
            my design work, I let myself inspire by my surroundings, how absurd
            they may be. I am an observer, and that helps. I see opportunities,
            not problems.
          </p>
        </div>
      </div>
    </section>
  </Layout>
</template>
<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
@import "~/assets/style/mediaQueries.scss";
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  @include center();
  width: 100%;
  
  &_guy {
    @include center;
    flex-wrap: wrap-reverse;

    width: 100%;
    height: 100%;
    justify-content: space-between;

    &_image {
      flex: 1 1 500px;

      height: 600px;
      max-width: 500px;
      background-image: url("../assets/images/daan.jpg");
      background-size: cover;
      background-position: bottom;
      background-repeat: no-repeat;

      // margin-left: auto;
      margin: auto;
    }
    .circle,
    .outline {
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 100px;
      top: 0;
      z-index: 1;
      background: #ffc7c7;
      right: 2rem;
    }
    .outline{
      border: 2px solid #0073b6; 
      top:-1rem;
      z-index: 0;
      right: 0;
      background: none;
    }
    &_text {
      margin: auto;
      height: 70%;
      @include center;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: left;
      position: relative;
      max-width: 60ch;
      flex: 0 1 200px;
@include for-phone-only {
      max-width: 45ch;
  margin: auto;
  }
      h2 {
        display: flex;
        margin-right: 4rem;
        &::before {
          content: "";
          width: 300px;
          height: 2.5px;
          background: black;
          // display: flex;
          margin: auto;
          z-index: 3333;
        }
      }
    }
  }
}
h1 {
  margin-right: auto;
}
h2 {
  margin-right: auto;
}
</style>
