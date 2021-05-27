<template>
  <div class="test">
    <div>
      <img :src="itemselect.src" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    itemselect() {
      return this.$store.state.productCart;
    },
  },
  mounted() {
    console.log(this.itemselect);
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 350px;
  height: 350px;
}
</style>
