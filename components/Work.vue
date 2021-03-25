<template>
  <Layout>
    <section class="work" id="work">
      <h2>Work</h2>
      <div class="logo_container">
        <div v-for="image in workImages" :key="image" class="logos">
          <a :href="require('~/assets/images/' + image)">
            <g-image :src="require('~/assets/images/' + image)" class="logo"
          /></a>
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
  data() {
    return {
      logo: true,
      template: false,
      // workImages: [
      //   "Spik&Span.jpg",
      //   "Ravenpoint.jpg",
      //   "Cheaux.jpg",
      //   "devriendendienst.jpg",
      //   "Hilsani.jpg",
      //   "RavenpointPodcast.jpg",
      //   "Thefood.png",
      //   "JustforOne.png",
      //   "lev.jpg",
      //   "AB.png",
      // ],
      workImages: [
     
        "hilsaniSmall.png",
        "hilasaniMinSmall.png",
        "lev1Small.png",
        "lev2Small.png",
        "justSmall.png",
        "ABsmall.png",
        "blogSmall.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.work {
  @include center();
  flex-direction: column;
  h2 {
    margin-right: auto;
    display: flex;
    &::after {
      content: "";
      width: 300px;
      height: 2.5px;
      background: black;
      // display: flex;
      margin: auto;
      z-index: 3333;
    }
  }

  .logo_container {
    @include center;
    flex-wrap: wrap;
    flex: 1 0 200px;
    padding-top: 0;
    height: 100%;
    width: 90%;
    .logos {
      width: 300px;
      height: 300px;
      margin: 1rem;
      @include center;
      .logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
