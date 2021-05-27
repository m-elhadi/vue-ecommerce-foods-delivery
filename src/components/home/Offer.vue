<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 col-12 offers px-1 overflow-hidden mb-2">
        <div class="f-offers">
          <div class="desc text-center">
            <h3>BUY 2 TO GET 3</h3>
            <h1>BIG BERGERS</h1>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-sm-12 col-12 offers px-1 overflow-hidden">
        <div class="s-offers">
          <div class="desc text-center">
            <h3>TRADITIONAL</h3>
            <h1>JABANESE SUSHI</h1>
            <a href="#">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped >
.offers {
  height: 250px;
  overflow: hidden;
  .f-offers {
    height: 100%;
    background-image: url("../../assets/images/demo3-2503194244.jpg");
    background-size: cover;
    transition: 1s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:hover {
      transform: scale(1.1);
    }
  }
  .s-offers {
    height: 100%;
    background-image: url("../../assets/images/demo3-2502910132.jpg");
    background-size: cover;
    transition: 1s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &:hover {
      transform: scale(1.1);
    }
  }
  .desc {
    padding: 10px 40px;
    color: #fff;

    h3 {
      font-weight: 100;
    }
    h1{
      font-weight: bold;
    }
    & a{
      color: #fff;
      text-align: right;
    }
  }
}
</style>