<template>
  <div class="burger-price">
    <button :class="{ col: !standard }" @click="changeShow('standard')">Standard</button>
    <button :class="{ col: !big }" @click="changeShow('big')">big</button>
    <div class="mt-3 price">
      <span :class="{ active: standard }">{{ priceStandard }}</span>
      <span :class="{ active: big }">{{ priceBig }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: Object,
  },
  data() {
    return {
      priceStandard: this.price.standard,
      priceBig: this.price.big,
      isActive: false,
      standard: false,
      big: true,
    };
  },

  methods: {
    changeShow(v) {
      if (v == "standard") {
        this.standard = false;
        this.big = true;
      } else {
        this.standard = true;
        this.big = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
