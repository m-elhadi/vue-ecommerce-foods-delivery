<template>
  <div class="container">
    <div class="row item-contain m-4">
      <div class="col-md-5 col-sm-12 image">
        <img :src="product.src" alt="slide.alt" />
      </div>
      <div class="col-md-7 col-sm-12 contain">
        <h5 class="my-3">{{ product.title }}</h5>
        <div class="icons-detail my-3"></div>
        <p>{{ product.description }}</p>
        <!-- Burger Details & price -->
        <div class="burger-price but but-burger my-3" v-if="product.name == 'burger'">
          <button :class="{ col: !standard }" @click="changeShow('standard')">
            Standard
          </button>
          <button :class="{ col: !big }" @click="changeShow('big')">big</button>
          <div class="mt-3 price">
            <span :class="{ active: standard }">{{ product.price.standard }}</span>
            <span :class="{ active: big }">{{ product.price.big }}</span>
          </div>
        </div>
        <!-- pizaa Details & price -->
        <div class="pizza-price but but-pizza my-3" v-if="product.name == 'pizza'">
          <div class="mt-2 mb-3">
            <button :class="{ col: thickStatus }" @click="changeWeight('thick')">
              thick
            </button>
            <button :class="{ col: thinStatus }" @click="changeWeight('thin')">
              thin
            </button>
          </div>
          <div class>
            <button :class="{ col: cm25Status }" @click="changeSize('cm25')">25cm</button>
            <button :class="{ col: cm30Status }" @click="changeSize('cm30')">30cm</button>
            <button :class="{ col: cm35Status }" @click="changeSize('cm35')">35cm</button>
          </div>

          <div class="my-3 price">
            <span :class="{ active: !cm25Status }">{{ product.price.cm25 }}</span>
            <span :class="{ active: !cm30Status }">{{ product.price.cm30 }}</span>
            <span :class="{ active: !cm35Status }">{{ product.price.cm35 }}</span>
          </div>
        </div>

        <div
          class="but price but-other my-3"
          v-if="product.name == 'sushi' || product.name == 'noodles'"
        >
          <span>{{ product.price }}</span>
        </div>

        <div class="add-cart">
          <button type="text" @click="addProductCart()">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      standard: false,
      big: true,
      burgerPrice: "standard",
      pizzaPrice: "cm25",
      thickStatus: true,
      thinStatus: false,
      cm25Status: true,
      cm30Status: false,
      cm35Status: false,
    };
  },
  props: ["id"],
  components: {},
  mounted() {
    // this.$store.dispatch("getProducts");
    this.$store.dispatch("getProduct", this.id);
    console.log(this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    addProductCart() {
      if (this.product.name == "burger") {
        this.$store.dispatch("addProductCart", {
          product: this.product,
          price: this.product.price[this.burgerPrice],
          size: this.burgerPrice,
          quantity: 1,
        });
      } else if (this.product.name == "pizza") {
        this.$store.dispatch("addProductCart", {
          product: this.product,
          price: this.product.price[this.pizzaPrice],
          size: this.pizzaPrice,
          quantity: 1,
        });
      } else {
        this.$store.dispatch("addProductCart", {
          product: this.product,
          price: this.product.price,
          quantity: 1,
        });
      }
    },
    changeShow(v) {
      if (v == "standard") {
        this.standard = false;
        this.big = true;
        this.burgerPrice = "standard";
      } else {
        this.standard = true;
        this.big = false;
        this.burgerPrice = "big";
      }
    },
    changeSize(v) {
      if (v === "cm25") {
        this.cm25Status = true;
        this.cm30Status = false;
        this.cm35Status = false;
        this.pizzaPrice = "cm25";
      } else if (v === "cm30") {
        this.cm25Status = false;
        this.cm30Status = true;
        this.cm35Status = false;
        this.pizzaPrice = "cm30";
      } else {
        this.cm25Status = false;
        this.cm30Status = false;
        this.cm35Status = true;
        this.pizzaPrice = "cm35";
      }
    },
    changeWeight(v) {
      if (v === "thick") {
        this.thickStatus = true;
        this.thinStatus = false;
      } else {
        this.thickStatus = false;
        this.thinStatus = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item-contain {
  .image {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}
.contain {
  font-family: "Roboto", sans-serif !important;
  color: #fff;
  padding: 5px 20px;
  h5 {
    font-size: 30px;
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
  .add-cart {
    width: 50%;
    button {
      width: 100%;
      display: block;
      text-decoration: none;
      color: #fff;
      text-align: center;
      padding: 5px 10px;
      border-radius: 10px;
      border: 1px solid #6fba54;
      background-color: #6fba54;
    }
  }
}
.burger-price {
  .active {
    display: none;
  }
  .col {
    background-color: #6fba54;
    border: none;
  }
  button {
    border: 0.2px solid #999999;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 4px 10px;
    margin-right: 10px;
    background-color: transparent;
    color: #fff;
  }
  .price {
    font-size: 25px;
    display: block;
    font-weight: bold;
  }
}
.pizza-price {
  .active {
    display: none;
  }
  .col {
    background-color: #6fba54;
    border: none;
  }
  button {
    border: 1px solid #d0d4da;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 3px 10px;
    margin-right: 10px;
    color: #fff;
    background-color: transparent;
  }
  .price {
    font-size: 25px;
    display: block;
    font-weight: bold;
    color: #fff;
  }
}
</style>
