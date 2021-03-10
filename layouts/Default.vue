<template>
  <div class="layout">
    <Nav />
    <slot/>
        <Footer />

  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/footer.vue";

export default {
  metaInfo: "Daan",
  components: {
Footer,
Nav
  },
};  

</script>

<style>

</style>
