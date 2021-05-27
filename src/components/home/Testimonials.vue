<template>
  <div class="Testimonials container-fluid py-5">
    <div class="row">
      <div class="col-12 text-center text-white">
        <h2>Testimonials</h2>
      </div>
      <div class="col-12">
        <carousel :autoplay="true" :perPage="1" :paginationEnabled="false">
          <slide>
            <div class="desc text-white text-center p-5 w-75 m-auto">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste commodi
                dignissimos magnam quia sequi. Aliquam!
              </p>
              <div class="personal">
                <img
                  class="rounded-circle py-3"
                  src="../../assets/images/demo-2937828140-55x55.jpg"
                  alt
                />
                <h6>Jessica Alba</h6>
              </div>
            </div>
          </slide>
          <slide>
            <div class="desc text-white text-center p-5 w-75 m-auto">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste commodi
                dignissimos magnam quia sequi. Aliquam!
              </p>
              <div class="personal">
                <img
                  class="rounded-circle py-3"
                  src="../../assets/images/demo-2939324692-55x55.jpg"
                  alt
                />
                <h6>Jessica Alba</h6>
              </div>
            </div>
          </slide>
          <slide>
            <div class="desc text-white text-center p-5 w-75 m-auto">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste commodi
                dignissimos magnam quia sequi. Aliquam!
              </p>
              <div class="personal">
                <img
                  class="rounded-circle py-3"
                  src="../../assets/images/demo-2939313322-55x55.jpg"
                  alt
                />
                <h6>Jessica Alba</h6>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.Testimonials {
  background-color: #1c2230;
  h2 {
    font-size: 30px;
    text-transform: uppercase;
  }
  p {
    font-size: 20px;
    color: #b2b7be;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  p {
    font-size: 14px !important;
  }
}
</style>
