<template>
  <Layout>
    <div class="banner">
          <Nav />        

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
    
 
  </Layout>
</template>
<script>
import Layout from "~/layouts/Default.vue";
import Nav from "~/components/Nav.vue";

export default {
  metaInfo: "home",
  components: {
    Layout,Nav,
    Slider
  },
  data() {
   
  },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logos{
  width: 100vw;
  height: 100%;
  @include center();
  background: #ffd9007e;
  position: absolute;
  z-index: 100000000000;
  // top: 0;
}

</style>
