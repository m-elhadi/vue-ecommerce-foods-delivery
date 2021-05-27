<template>
  <div class="tabs text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="main-sort">
            <li @click="productName('burger')">Burger</li>
            <li @click="productName('pizza')">Pizza</li>
            <li @click="productName('sushi')">Sushi</li>
            <li @click="productName('noodles')">Noodles</li>
          </ul>
        </div>
        <!-- Burgers -->
        <div class="col-md-12 burgers" v-if="burger == true">
          <div class="row">
            <div class="col-md-12">
              <ul class="sub-sort" v-if="name == 'burger' || name == 'pizza'">
                <li @click="productCatagery('all')">All</li>
                <li @click="productCatagery('spicy')">Spicy</li>
                <li @click="productCatagery('vegetarian')" v-if="name == 'pizza'">
                  Vegetarian
                </li>
                <li @click="productCatagery('mushrooms')" v-if="name == 'pizza'">
                  Mushrooms
                </li>
                <li @click="productCatagery('meat')">Meat</li>
                <li @click="productCatagery('fish')" v-if="name == 'burger'">Fish</li>
                <li @click="productCatagery('chicken')" v-if="name == 'burger'">
                  Chicken
                </li>
                <li @click="productCatagery('seafood')" v-if="name == 'pizza'">
                  Seafood
                </li>
              </ul>
            </div>
            <div class="col-md-12">
              <carousel
                :perPage="4"
                :perPageCustom="[
                  [350, 1],
                  [592, 2],
                  [768, 3],
                  [1024, 4],
                ]"
                :paginationEnabled="false"
              >
                <slide v-for="item in filterProducts" :key="item.id">
                  <product-card :items="item"></product-card>
                </slide>
              </carousel>
            </div>
            <!--End-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/home/ProductCard";
import ProductPreview from "@/components/home/ProductPreview";

export default {
  components: {
    ProductCard,
    ProductPreview,
  },
  data() {
    return {
      burger: true,
      pizza: false,
      sushi: false,
      noodles: false,

      name: "burger",
      category: "all",
      activePriceBurger: "standard",
      test: null,
    };
  },
  mounted() {
    this.$store.dispatch("getProducts");
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
.active {
  background-color: #6fba54;
}

.tabs {
  ul li {
    list-style: none;
  }
  .main-sort {
    display: flex;
    justify-content: center;
    width: 75%;
    margin: 20px auto 30px;
    li {
      font-size: 2.2rem;
      margin-right: 35px;
      cursor: pointer;
    }
  }
  .sub-sort {
    display: flex;
    justify-content: center;
    width: 75%;
    margin: 20px auto 30px;
    li {
      font-size: 1rem;
      margin-right: 10px;
      padding: 2px 8px;
      border: 1px solid #d0d4da;
      border-radius: 5px;
      color: #d0d4da;
      cursor: pointer;
    }
  }
  .item-contain {
    .image {
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
    .contain {
      font-family: "Roboto", sans-serif !important;

      h5 {
        font-size: 22px;
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
        }
      }
      .price {
        font-size: 25px;
        display: block;
        font-weight: bold;
      }
    }
    .add-cart {
      visibility: hidden;
      transition: visibility 1s;
    }
    &:hover .add-cart {
      visibility: visible;
    }
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .main-sort {
    li {
      font-size: 25px !important;
      margin-right: 20px !important;
    }
  }
  .sub-sort {
    width: 100%;
    li {
      font-size: 12px !important;
    }
  }
}
</style>
