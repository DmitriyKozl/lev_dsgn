<template>
  <Layout>
      <div class="content">
        <AboutThisGuy />
        <Work />
        <Footer />
      </div>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";
import AboutThisGuy from "@/components/AboutThisGuy.vue";
import Work from "@/components/Work.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    AboutThisGuy,
    Layout,
    Footer,
    Work,
  },
};
</script>
<style lang="scss">
.content{
  max-width: 1200px;
  margin: auto;

}
</style>
