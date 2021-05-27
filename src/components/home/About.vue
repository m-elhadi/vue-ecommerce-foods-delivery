<template>
  <div class="about container">
    <div class="row">
      <div class="about-image col-md-6 col-sm-12 col-12 img" @click="destroyRellax">
        <div id="img" class="img-bg">
          <img
            class="img-bg1"
            v-rellax="rellax"
            src="../../assets/images/demo-0147071367.png"
            alt=""
          />
          <img
            class="img-bg2"
            v-rellax="rellax"
            src="../../assets/images/demo-0111010712.jpg"
            alt=""
          />
          <img
            class="img-bg3"
            v-rellax="rellax"
            src="../../assets/images/demo-0147626965.png"
            alt=""
          />
          <img
            class="img-bg4"
            v-rellax="rellax"
            src="../../assets/images/demo-0111777841.jpg"
            alt=""
          />
          <div v-rellax="rellax" class="img-name">
            <h4>Louis Mckay</h4>
            <h1>"CHIEF"</h1>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-12">
        <h2 class="passion-head px-5 pb-3">We serve passion</h2>
        <carousel
          :easing="ease"
          :loop="true"
          :autoplayDirection="forward"
          :autoplay="true"
          :autoplayTimeout="2000"
          :perPage="2"
          :perPageCustom="[
            [350, 1],
            [592, 1],
            [768, 2],
            [1024, 2],
          ]"
          :paginationEnabled="false"
          :navigationEnabled="true"
          :navigationClickTargetSize="15"
        >
          <slide v-for="item in filterProducts" :key="item.id">
            <product-card :items="item"></product-card>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/home/ProductCard";
import ProductPreview from "@/components/home/ProductPreview";

export default {
  data() {
    return {
      rellax: {
        speed: -1,
        center: false,
      },
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

    destroyRellax() {
      // console.log(window.scrollY);
      if (window.scrollY > 1500) {
        this.rellax = false;
      } else {
        this.rellax = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.destroyRellax);
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 40px 0;
  .about-image {
    overflow: hidden;
    position: relative;
    height: 650px;
    .img-bg1 {
      position: absolute;
      left: 20px;
      top: 0;
      z-index: 4;
      transition: 7s;
    }
    .img-bg2 {
      position: absolute;
      top: 180px;
      z-index: 3;
      transition: 7s;
    }
    .img-bg3 {
      position: absolute;
      top: 150px;
      left: 50px;
      z-index: 2;
      transition: 2s;
    }
    .img-bg4 {
      position: absolute;
      top: 1px;
      right: 0;
      z-index: 1;
      transition: 10s;
    }
    .img-name {
      color: #e3d7b6;
      letter-spacing: 1px;

      text-align: center;
      position: absolute;
      right: 70px;
      bottom: 100px;
      z-index: 5;
      transition: 10s;
      h1 {
        font-weight: bold;
      }
    }
  }
  .passion-head {
    color: #fff;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bolder;
  }
  .item-contain {
    .image {
      img {
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    .contain {
      font-family: "Roboto", sans-serif !important;

      h5 {
        font-size: 22px;
        color: #fff;
      }

      p {
        font-size: 14px;
        font-weight: 100;
        color: #d0d4da;
        width: 80%;
      }
      .but {
        button {
          border: 1px solid #d0d4da;
          border-radius: 20px;
          font-size: 0.9rem;
          padding: 2px 8px;
          margin-right: 10px;
          color: #fff;
        }
      }
      .price {
        font-size: 25px;
        display: block;
        font-weight: bold;
        color: #fff;
      }
      .add-cart {
        visibility: hidden;
        transition: visibility 1s;
      }
    }

    &:hover .add-cart {
      visibility: visible;
    }
  }
}
.VueCarousel-navigation-prev {
  top: 5px;
  background-color: #fff !important;
  color: #fff !important;
}
.VueCarousel-navigation-next {
  top: 5px;
  background-color: #fff !important;
  color: #fff !important;
}
.VueCarousel-navigation-button {
  background-color: #fff !important;
  color: #fff !important;
}
.VueCarousel-navigation {
  background-color: #fff !important;
  color: #fff !important;
}
.VueCarousel-navigation-prev[data-v-453ad8cd] {
  left: 0;
  transform: translateY(-10%) translateX(-100%);
  font-family: "system";
}
</style>
