<template>
  <div class="tabs text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-5 header-title">
          <h1>NOODLES</h1>
        </div>
        <div class="col-md-12 burgers">
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

            <div class="col-md-2">
              <div class="slide-header mt-4">
                <h4>Filter By Price</h4>
                <form>
                  <label>From</label>
                  <input
                    style="width: 90%"
                    type="range"
                    v-model="range"
                    min="0"
                    max="40"
                  />
                  <p>Price : $ {{ range }}</p>
                </form>
              </div>
              <div class="prod-recommend mt-5">
                <h5 class="text-center">WE RECOMMEND</h5>
                <div
                  class="d-flex align-items-center"
                  v-for="prod in productRecommend"
                  :key="prod.id"
                >
                  <div class="flex-shrink-0">
                    <img
                      class="img-fluid"
                      style="width: 70px"
                      :src="prod.product.src"
                      alt=""
                    />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6>{{ prod.product.title }}</h6>
                    <span>{{ prod.price }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-10">
              <div class="row">
                <div class="col-md-4" v-for="item in filterProducts" :key="item.id">
                  <product-card :items="item"></product-card>
                </div>
              </div>
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

export default {
  props: {
    // productName: String,
    // productcategory: String,
  },
  components: {
    ProductCard,
  },
  data() {
    return {
      burger: true,
      pizza: false,
      sushi: false,
      noodles: false,
      name: "noodles",
      category: "all",
      activePriceBurger: "standard",
      test: null,
      range: 40,
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
      return this.filterProductsByPrice(
        this.filterProductsByName(this.filterProductsByCategory(this.products))
      );
    },

    productRecommend() {
      return this.$store.state.productRecom;
    },
  },
  watch: {
    // name:function(){
    //     return this.category= 'all';
    // }
  },
  methods: {
    products() {
      return this.$store.state.products;
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
    filterProductsByPrice: function (products) {
      return products.filter((product) => {
        if (product.price > 0 && product.price < this.range) {
          return product;
        }
      });
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
  .header-title {
    h1 {
      font-weight: bolder;
      text-decoration: underline;
    }
  }
  ul li {
    list-style: none;
  }
  .main-sort {
    display: flex;
    justify-content: center;
    width: 75%;
    margin: 20px auto 30px;
    li {
      font-size: 2.5rem;
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
      .cart {
        display: block;
        text-decoration: none;
        background-color: #6fba54;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
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
</style>
