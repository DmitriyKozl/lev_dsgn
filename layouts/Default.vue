<template>
  <div class="layout">
    <Nav />
    <slot/>

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

export default {
  metaInfo: "Daan",
  components: {
Nav
  },
};  

</script>

<style>
.layout{
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
    flex-direction: column;
    

}
</style>
