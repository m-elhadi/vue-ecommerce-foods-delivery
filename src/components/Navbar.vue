<template>
  <nav class="navbar navbar-expand-lg navbar-light text-white sticky-top" :class="{ bg }">
    <div class="container">
      <a class="navbar-brand" href="#" @click="linkActive('home')">
        <router-link to="/">
          <img src="../assets/images/demo1-0558261533-55x55.png" alt="" />
        </router-link>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item" @click="linkActive('home')">
            <router-link
              :class="{ 'link-active': home }"
              class="nav-link active text-white"
              to="/"
              >Home</router-link
            >
          </li> -->
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/about">ABOUT</router-link>
          </li> -->

          <li class="nav-item" @click="linkActive('burger')">
            <router-link class="nav-link" :class="{ 'link-active': burger }" to="/burger"
              ><span class="text-center">
                <img class="img-w" src="../assets/icon/hamburgerW.svg" alt="" />
              </span>
              Burger</router-link
            >
          </li>
          <li class="nav-item" @click="linkActive('pizza')">
            <router-link class="nav-link" :class="{ 'link-active': pizza }" to="/pizza"
              ><span class="text-center">
                <img class="img-w" src="../assets/icon/pizzaW.svg" alt="" />
              </span>
              Pizza</router-link
            >
          </li>
          <li class="nav-item" @click="linkActive('noodles')">
            <router-link
              class="nav-link"
              :class="{ 'link-active': noodles }"
              to="/noodles"
              ><span class="text-center">
                <img class="img-w" src="../assets/icon/noodlesW.svg" alt="" />
              </span>
              Noodles</router-link
            >
          </li>
          <li class="nav-item" @click="linkActive('sushi')">
            <router-link :class="{ 'link-active': sushi }" class="nav-link" to="/sushi"
              ><span class="text-center">
                <img class="img-w" src="../assets/icon/sushiW.svg" alt="" />
              </span>
              Sushi</router-link
            >
          </li>
        </ul>
      </div>
      <!-- dropdown -->
      <div class="dropdown">
        <div
          class="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div class="counter">{{ totalCart }}</div>

          <img class="img-fluid img-w" src="../assets/icon/shopping-cartW.svg" alt="" />
        </div>
        <mini-cart></mini-cart>
        <!-- End Dropdown -->
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-toggler {
  background-color: #7eb444;
}
.navbar-toggler .line {
  background-color: #fff;
}
.link-active {
  text-decoration: #fe8128 wavy underline 2px;
  text-underline-position: under;
}
.navbar {
  transition: 1s;
}
.bg {
  background-color: #1d2331;
  transition: 1s;
  .nav-link {
    color: #fff !important;
    font-size: 20px !important;
  }
}
.nav-link {
  color: #fff !important;
  font-size: 25px !important;
  margin-left: 30px;

  .img-w {
    width: 35px;
    display: inline;
  }
}
.dropdown {
  position: relative;
  img {
    width: 35px;
  }
  .counter {
    color: #fff;
    font-size: 13px;
    background-color: crimson;
    border-radius: 50%;
    padding: 2px 7px;
    position: absolute;
    right: 0;
    top: -7px;
  }
}
</style>

<script>
import MiniCart from "../components/MiniCart";

export default {
  components: { MiniCart },
  data() {
    return {
      bg: false,
      home: false,
      burger: false,
      pizza: false,
      noodles: false,
      sushi: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    totalCart() {
      return this.$store.getters.totalCart;
    },
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.bg = true;
      } else {
        this.bg = false;
      }
    },
    linkActive(e) {
      this.home = false;
      this.burger = false;
      this.pizza = false;
      this.noodles = false;
      this.sushi = false;
      switch (e) {
        case "burger":
          this.burger = true;
          break;
        case "pizza":
          this.pizza = true;
          break;
        case "noodles":
          this.noodles = true;
          break;
        case "sushi":
          this.sushi = true;
          break;

        default:
          this.home = true;
          break;
      }
    },
  },
};
</script>
