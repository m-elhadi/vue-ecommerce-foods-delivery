<template>
  <section class="recommend container-fluid py-5">
    <div class="row">
      <div class="col-md-12 text-center text-white">
        <h1>We Recommend</h1>
      </div>
      <div class="col-md-12 recomend-item py-4">
        <carousel
          :easing="ease"
          :loop="true"
          :autoplayDirection="forward"
          :autoplay="true"
          :autoplayTimeout="5000"
          :perPage="4"
          :perPageCustom="[
            [350, 1],
            [592, 1],
            [768, 3],
            [1024, 5],
          ]"
          :paginationEnabled="false"
        >
          <slide v-for="item in filterProducts" :key="item.id">
            <product-card :items="item"></product-card>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/home/ProductCard";
import ProductPreview from "@/components/home/ProductPreview";

export default {
  data() {
    return {
      burger: true,
      pizza: false,
      sushi: false,
      noodles: false,
      name: "pizza",
      category: "all",
      activePriceBurger: "standard",
      test: null,
    };
  },
  components: {
    ProductCard,
    ProductPreview,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filterProducts: function () {
      return this.filterProductsByName(this.filterProductsByCategory(this.products));
    },
  },
  methods: {
    productName: function (v) {
      this.name = v;
      this.category = "all";
    },
    productCatagery: function (v) {
      this.category = v;
    },

    filterProductsByCategory: function (products) {
      return products.filter((product) => product.category.indexOf(this.category) >= 0);
    },

    filterProductsByName: function (products) {
      return products.filter((product) => !product.name.indexOf(this.name));
    },
    sendProductSelect(v) {
      this.$store.commit("changeProductSelect", v);
    },
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  h1 {
    font-size: 40px;
    font-weight: bolder;
    text-decoration: #fe8128 wavy underline 3px;
    text-underline-position: under;
  }
}
</style>
