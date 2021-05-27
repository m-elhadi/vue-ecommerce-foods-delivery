<template>
  <div class="body">
    <head-nav></head-nav>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import HeadNav from "@/components/HeadNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    HeadNav,
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body {
  font-family: "Oswald", sans-serif;
  background-image: url("../src/assets/demo3-2535265688.webp");
  background-size: cover;
}
</style>
