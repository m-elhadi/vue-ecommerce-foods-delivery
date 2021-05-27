<template>
  <div class="visit py-5">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <div class="visit-us">
            <div class="icon"></div>
            <h3>MON - FRI 7PM -8PM</h3>
            <h2>VISIT US FOR HAPPY HOUR!</h2>
            <H1>15% OFF</H1>
          </div>
        </div>
        <div class="bg-main col-md-4">
          <div class="bg-img" v-rellax="rellax">
            <img class="img1" src="../../assets/images/demo-0145864654.png" alt="" />
            <img class="img2" src="../../assets/images/demo-0145440654.jpg" alt="" />
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center">
          <div class="parg text-center">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, asperiores.
            </p>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rellax: {
        speed: -3,
        center: true,
      },
    };
  },
  computed: {
    getYPosition() {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      return top;
    },
  },
};
</script>

<style lang="scss">
.visit {
  background-image: url("../../assets/images/demo-0138454812.jpg");
  background-attachment: fixed;
  background-position: top center;
  background-size: cover;
  overflow: hidden;
  color: #99917d;
  .visit-us {
    text-align: center;
    h3 {
      font-size: 30px;
    }
    h2 {
      font-weight: bold;
    }
    h1 {
      font-weight: bold;
      font-size: 60px;
    }
  }
  .bg-main {
    .bg-img {
      height: 320px;
      position: relative;

      .img1 {
        width: 200px;
        position: absolute;
        top: 0;
        left: 25%;
        z-index: 1;
        transition: 8s;
      }
      .img2 {
        width: 200px;
        position: absolute;
        top: 15px;
        left: 35%;
        bottom: 0;
        transition: 7s;
        z-index: 2;
      }
    }
  }
  .parg {
    p {
      font-size: 25px;
      margin-bottom: 25px;
    }
    a {
      border: 1px solid #99917d;
      color: #99917d;
      padding: 10px 30px;
      border-radius: 7px;
      text-decoration: none;
      &:hover {
        background-color: #99917d;
        color: black;
      }
    }
  }
}
@media (max-width: 568px) {
  .bg-main {
    overflow: hidden;
  }
}
</style>
