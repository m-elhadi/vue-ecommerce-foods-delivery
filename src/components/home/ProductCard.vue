<template>
  <div class="item-contain m-2 px-2 py-4">
    <div class="image">
      <router-link :to="{ name: 'ProductPreview', params: { id: items.id } }">
        <img :src="items.src" alt="slide" />
      </router-link>
    </div>
    <div class="contain">
      <h4 class="my-3">{{ items.title }}</h4>
      <div class="icons-detail my-3"></div>
      <p class="text-white">{{ items.description }}</p>
      <!-- Burger Details & price -->
      <div class="burger-price but but-burger my-3" v-if="items.name == 'burger'">
        <button :class="{ col: !standard }" @click="changeShow('standard')">
          Standard
        </button>
        <button :class="{ col: !big }" @click="changeShow('big')">big</button>
        <div class="mt-3 price">
          <span :class="{ active: standard }">$ {{ items.price.standard }}</span>
          <span :class="{ active: big }">$ {{ items.price.big }}</span>
        </div>
      </div>
      <!-- pizaa Details & price -->
      <div class="pizza-price but but-pizza my-3" v-if="items.name == 'pizza'">
        <div class="mt-2 mb-3">
          <button :class="{ col: thickStatus }" @click="changeWeight('thick')">
            thick
          </button>
          <button :class="{ col: thinStatus }" @click="changeWeight('thin')">thin</button>
        </div>
        <div class>
          <button :class="{ col: cm25Status }" @click="changeSize('cm25')">25cm</button>
          <button :class="{ col: cm30Status }" @click="changeSize('cm30')">30cm</button>
          <button :class="{ col: cm35Status }" @click="changeSize('cm35')">35cm</button>
        </div>

        <div class="my-3 price">
          <span :class="{ active: !cm25Status }">$ {{ items.price.cm25 }}</span>
          <span :class="{ active: !cm30Status }">$ {{ items.price.cm30 }}</span>
          <span :class="{ active: !cm35Status }">$ {{ items.price.cm35 }}</span>
        </div>
      </div>

      <div
        class="but price but-other my-3"
        v-if="items.name == 'sushi' || items.name == 'noodles'"
      >
        <span>$ {{ items.price }}</span>
      </div>
      <div class="add-cart">
        <button type="text" @click="addProductCart()">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: this.items,
      isActive: true,
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
  props: ["id", "items"],
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
  box-sizing: border-box;
  .image {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .contain {
    font-family: "Roboto", sans-serif !important;

    h4 {
      font-size: 19px;
      color: #fff;
      font-weight: bold;
    }

    p {
      font-size: 14px;
      font-weight: 100;
      color: #d0d4da;
      width: 95%;
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
    transition: visibility 0.5s ease;
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
  &:hover {
    border: 0.5px solid rgba(207, 207, 207, 0.185);
  }
  &:hover .add-cart {
    visibility: visible;
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
