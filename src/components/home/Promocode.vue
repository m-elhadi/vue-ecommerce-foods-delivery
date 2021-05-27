<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-12 promocode d-lg-flex d-none">
        <div class="contains w-50 text-center">
          <h3>FOR 10% DISCOUNT</h3>
          <h1>GET PROMOCODE</h1>
          <form class="w-75 m-auto">
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>

      <div class="col-sm-12 col-12 d-md-none contain w-100">
        <div class="row">
          <div class="col-12 image">
            <img src="../../assets/images/demo3-2551484526.jpg" alt />
          </div>
          <div class="col-12 py-5">
            <div class="w-75 m-auto text-center">
              <h3>FOR 10% DISCOUNT</h3>
              <h1>GET PROMOCODE</h1>
              <form>
                <input type="email" placeholder="Enter your email" />
                <input type="submit" value="SEND" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.promocode {
  height: 400px;
  min-height: 250px;
  background-image: url("../../assets/images/demo3-2551484526.jpg");
  background-position: center right;
  //   background-attachment: fixed;
  transition: 1s;
  background-size: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .contains {
    color: #fff;
    h3 {
      font-weight: 100;
    }
    h1 {
      font-weight: bold;
    }
    input {
      margin-top: 15px;
      padding: 8px;
      border-radius: 5px;
      border: none;
      width: 80%;
    }
    input[type="email"] {
      width: 70%;
      outline: none;
      background-color: #2d323f;
      margin-right: 10px;
      color: #fff;
      font-size: 18px;
    }
    input[type="submit"] {
      width: 25%;
      background-color: #fff;
      color: rgb(14, 12, 12);
      font-weight: bold;
      font-size: 18px;
    }
  }
}
.contain {
  .image {
    img {
      width: 100%;
    }
  }
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  h3 {
    font-weight: 100;
  }
  h1 {
    font-weight: bold;
  }
  input {
    margin-top: 15px;
    padding: 6px;
    border-radius: 5px;
    border: none;
  }
  input[type="email"] {
    width: 70%;
    outline: none;
    background-color: #2d323f;
    margin-right: 10px;
    color: #fff;
    font-size: 15px;
  }
  input[type="submit"] {
    width: 25%;
    background-color: #fff;
    color: rgb(14, 12, 12);
    font-weight: bold;
    font-size: 15px;
  }
}
</style>
