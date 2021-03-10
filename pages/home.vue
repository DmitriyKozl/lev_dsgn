<template>
  <Layout>
    <div>
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
    </div>
 
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

<style lang="scss" >

html{
  overflow: hidden;
}
</style>
