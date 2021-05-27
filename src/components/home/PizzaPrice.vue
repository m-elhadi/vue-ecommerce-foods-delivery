<template>
  <div class="pizza-price">
    <div class="mt-2 mb-3">
      <button :class="{col:thickStatus}" @click="changeWeight('thick')">thick</button>
      <button :class="{col:thinStatus}" @click="changeWeight('thin')">thin</button>
    </div>
    <div class>
      <button :class="{col:cm25Status}" @click="changeSize('cm25')">25cm</button>
      <button :class="{col:cm30Status}" @click="changeSize('cm30')">30cm</button>
      <button :class="{col:cm35Status}" @click="changeSize('cm35')">35cm</button>
    </div>

    <div class="my-3 price">
      <span :class="{active:!cm25Status}">{{cm25Price}}</span>
      <span :class="{active:!cm30Status}">{{cm30Price}}</span>
      <span :class="{active:!cm35Status}">{{cm35Price}}</span>
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
      cm25Price: this.price.cm25,
      cm30Price: this.price.cm30,
      cm35Price: this.price.cm35,
      thickStatus: true,
      thinStatus: false,
      cm25Status: true,
      cm30Status: false,
      cm35Status: false,
    };
  },
  methods: {
    changeSize(v) {
      if (v === "cm25") {
        this.cm25Status = true;
        this.cm30Status = false;
        this.cm35Status = false;
      } else if (v === "cm30") {
        this.cm25Status = false;
        this.cm30Status = true;
        this.cm35Status = false;
      } else {
        this.cm25Status = false;
        this.cm30Status = false;
        this.cm35Status = true;
      }
    },
    changeWeight(v) {
      if (v === "thick") {
        this.thickStatus = true;
        this.thinStatus = false;
       
      }  else {
        this.thickStatus = false;
        this.thinStatus = true;
      }
    }
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
  border: 1px solid #d0d4da;
  border-radius: 20px;
  font-size: .8rem;
  font-weight: bold;
  padding: 3px 10px;
  margin-right: 10px;
  color:#fff;
  background-color: transparent;
}
.price {
  font-size: 25px;
  display: block;
  font-weight: bold;
  color:#fff;
}
</style>