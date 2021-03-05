<template>
  <div class="work" id="work">
    <div class="content_title">
      <div class="triangle"></div>
      <h3>Work</h3>
    </div>
    <!-- <div class="logos">
      <div class="expand">
          <img src="@/assets/images/EXPAND.png" alt="" />
        </div> 

      </div>
     -->
  </div>
</template>
<script>
import Slider from "~/components/Slider.vue";

export default {
  metaInfo: "home",
  components: {
    Slider,
  },
  // data() {
  //   return {
  //     workImages: [
  //       "images/Spik&Span.jpg",
  //       "images/Ravenpoint.jpg",
  //       "images/Cheaux.jpg",
  //       "images/devriendendienst.jpg",
  //       "images/Hilsani.jpg",
  //       "images/RavenpointPodcast.jpg",
  //     ],
  //   };
  // },
};
</script>

<style lang="scss" scoped>
@mixin center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.work {
  flex-direction: column;
  z-index: 4;

  .content_title {
    width: 25%;
    z-index: 3;
    position: relative;
    // @include center;


    h3 {
      position: absolute;
      top: 40%;
      left: 25%;
      
    }

    .triangle {
      width: 0;
      height: 0;
      border-top: 150px solid transparent;
      border-right: 200px solid #0073b6;
      border-bottom: 100px solid transparent;
    }
    
    
  }
  // .logos {
  //   @include center;
  //   flex-wrap: wrap;
  //   width: 500px;
  // overflow: scroll;
  // overflow-x: hidden;
  //   height: 500px;
  //   touch-action: pan-up;
  //   position: relative;
  //   .logo {
  //     @include center;
  //     flex-wrap: wrap;
  //     &_image {
  //       flex: 1 1 500px;
  //       width: 500px;
  //       height: 500px;
  //       object-fit: scale-down;
  //       object-position: center;
  //     }
  //   }
  // }
}
</style>
