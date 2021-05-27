<template>
  <div class="home">
    <Header></Header>
    <About />
    <Offer />
    <Tabs />
    <Promocode />
    <Foodz />
    <Testimonials />
    <Visit />
    <Recommend />
    <Limited />
    <Blog />
  </div>
</template>

<script>
import Header from "@/components/home/Header";
import About from "@/components/home/About";
import Offer from "@/components/home/Offer";
import Promocode from "@/components/home/Promocode";
import Foodz from "@/components/home/Foodz";
import Testimonials from "@/components/home/Testimonials";
import Visit from "@/components/home/Visit";
import Recommend from "@/components/home/Recommend";
import Limited from "@/components/home/Limited";
import Blog from "@/components/home/Blog";

import Tabs from "@/components/home/Tabs";

export default {
  components: {
    Header,
    Offer,
    Tabs,
    Promocode,
    Foodz,
    Testimonials,
    Visit,
    Recommend,
    Limited,
    Blog,
    About,
  },
};
</script>

<style></style>
