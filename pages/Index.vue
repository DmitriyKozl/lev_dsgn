<template>
  <Layout>
    <div class="banner">
          <Nav />

      <header class="banner_title"><h1>Daan Van de Verre</h1></header>
      <!-- <div class="figures hide">
        <div class="bigS"></div>
        <div class="fillS"></div>
        <div class="lineS"></div>
      </div> -->
    </div>
    <section class="about" id="about">
      <div class="about_image">
        <div class="about_image_container">
          <img src="@/assets/images/daan.jpg" alt="">
        </div>
      </div>
      <div class="content">
        <div class="circle"></div>
        <div class="outlineCircle"></div>
        <div class="content_title">
          <h2>About</h2>
        </div> 
       
        <div class="content_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            facilis, at tenetur commodi, eius eum iure amet minima veritatis
            eaque reprehenderit dolores itaque recusandae! Maiores cum vel, hic
            explicabo laudantium voluptates nulla repudiandae deserunt voluptate
            libero fuga asperiores iure dolor! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Delectus facilis, at tenetur commodi,
            eius eum iure amet minima veritatis eaque reprehenderit dolores
            itaque recusandae! Maiores cum vel, hic explicabo laudantium
            voluptates nulla repudiandae deserunt voluptate libero fuga
            asperiores iure dolor!
          </p>
        </div>
      </div>
    </section>
    <section class="work" id="work">
      <div class="content_title">
        <div class="triangle"></div>
        <div class="outlineTriangle"></div>
        <h3>Work</h3>
      </div>
      <div class="logos">
        <div v-for="image in workImages" :key="image" class="logo">
          <img class="logo_image" :src="require('~/assets/' + image)" alt="" />
        </div>
      </div>
   
    </section>
  </Layout>
</template>
<script>
import Layout from "~/layouts/Default.vue";
import Nav from "~/components/Nav.vue";

export default {
  metaInfo: "home",
  components: {
    Layout,Nav

  },
  data() {
    return {
      workImages: [
        "images/Spik&Span.jpg",
        "images/Ravenpoint.jpg",
        "images/Cheaux.jpg",
        "images/devriendendienst.jpg",
        "images/Hilsani.jpg",
        "images/RavenpointPodcast.jpg"
      ],
    };
  },
};
</script>

<style lang="scss">


</style>
