<template>
  <div
    class="dropdown-menu dropdown-menu-dark"
    aria-labelledby="dropdownMenuButton1"
    style="min-width: 350px; left: -320px; right: 20px; padding: 15px"
  >
    <div class="d-flex py-1" v-for="item in ProductCart" :key="item.product.id">
      <img :src="item.product.src" style="width: 70px; height: 70px" alt="" />
      <div class="px-2 w-100">
        <h5 class="text-white font-weight-bold">{{ item.product.title }}</h5>
        <span class="text-capitalize size">{{ item.size }}</span>
        <div class="d-flex justify-content-between">
          <span> {{ item.quantity }} x ${{ item.price }}</span>

          <button
            @click.stop.prevent="removeProductCart(item.product.id, item.size)"
            class="btn btn-warning px-1 py-0"
            type="text"
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </div>

    <div class="total-cart d-flex justify-content-between py-3">
      <span>SUBTOTAL : $ {{ totalPriceItem }}</span>
      <button
        @click.stop.prevent="removeAllProductCart()"
        class="btn btn-warning p-1"
        type="text"
      >
        Clear Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ProductCart() {
      return this.$store.state.cart;
    },
    totalCart() {
      return this.$store.getters.totalCart;
    },
    totalPriceItem() {
      return this.$store.getters.totalPriceItem;
    },
  },
  methods: {
    removeProductCart(productRemove, productSize) {
      console.log(productSize);
      this.$store.dispatch("removeProductCart", {
        productRemove,
        productSize,
      });
    },
    removeAllProductCart() {
      this.$store.dispatch("removeAllProductCart");
    },
  },
};
</script>

<style lang="scss" scoped></style>
