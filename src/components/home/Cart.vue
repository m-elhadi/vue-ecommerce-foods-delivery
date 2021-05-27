<template>
  <button type="text" @click="addProductCart()">ADD TO CART</button>
</template>
<script>
export default {
  data() {
    return {
      dataCart: this.cartDate,
    };
  },
  props: {
    cartDate: Object,
  },
  methods: {
    addProductCart() {
      this.$store.dispatch("addProductCart", {
        product: this.dataCart,
        quantity: 1,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
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
</style>
