<template>
  <hooper :settings="hooperSettings" style="height: 100vh">
    <slide>
      <div class="slidr">
        <img class="img-slider" src="@/assets/images/demo3-2524953644.jpg" alt />
        <div class="contain offset-lg-6">
          <div class="image">
            <img src="../../assets/images/demo-0240924818.png" alt />
          </div>
          <h1>JAPANESE TEA</h1>
          <h3>TRADITIONAL</h3>
          <a class="mt-3 rounded" href="#">ORDER NOW</a>
        </div>
      </div>
    </slide>
    <slide>
      <div class="slidr">
        <img class="img-slider" src="@/assets/images/demo3-2500601066.jpg" alt />
        <div class="contain offset-lg-6">
          <div class="image">
            <img src="../../assets/images/demo-0208137535.png" alt />
          </div>
          <h1>BRUSCHETTAS</h1>
          <h3>GOUDA CHEESE</h3>
          <a class="mt-3 rounded" href="#">ORDER NOW</a>
        </div>
      </div>
    </slide>
    <slide>
      <div class="slidr">
        <img class="img-slider" src="@/assets/images/demo3-2512667069.jpg" alt />
        <div class="contain offset-lg-6">
          <div class="image">
            <img src="../../assets/images/demo-0257826561.png" alt />
          </div>
          <h1>PEPPERONI</h1>
          <h3>SPICY</h3>
          <a class="mt-3 rounded" href="#">ORDER NOW</a>
        </div>
      </div>
    </slide>

    <hooper-navigation slot="hooper-addons"></hooper-navigation>

    <hooper-progress slot="hooper-addons"></hooper-progress>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Progress as HooperProgress,
  Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";
export default {
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        mouseDrag: true,
        wheelControl: false,
        progress: true,
        autoPlay: true,
        playSpeed: 2000,
      },
    };
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    HooperProgress,
  },
};
</script>
<style lang="scss" scoped>
.hooper-liveregion.hooper-sr-only {
  background-color: red;
  position: fixed;
  bottom: 0;
  z-index: 1000;
}

.slidr {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .img-slider {
    // width: 100%;
    // height: 100%;
    object-fit: cover;
    object-position: top left;
  }
  .contain {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 3;
    color: white;
    .image {
      margin-bottom: 20px;
      width: 75px;
      img {
        width: 100%;
        min-width: 50px;
        min-height: 50px;
        object-fit: cover;
      }
    }
    h1 {
      font-size: 80px;
      font-weight: bolder;
    }
    h3 {
      font-size: 45px;
      font-weight: 200;
    }
    a {
      font-size: 20px;
      text-decoration: none;
      background: #d1333c;
      color: white;
      padding: 10px 16px;
      display: inline-block;
    }
  }
}
@media (min-width: 768px) and (max-width: 979px) {
}
@media (min-width: 320px) and (max-width: 767px) {
  h1 {
    font-size: 50px !important;
  }
  h3 {
    font-size: 30px !important;
  }
  a {
    font-size: 15px !important;
  }
}
</style>
