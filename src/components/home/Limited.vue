<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 limited d-lg-flex d-none">
        <div class="contain-limit text-center">
          <div class="timer mb-3">
            <span class>
              <div>0</div>
              <div>DAY</div>
            </span>
            <span>
              <div>00</div>
              <div>HR</div>
            </span>
            <span>
              <div>00</div>
              <div>MIN</div>
            </span>
            <span>
              <div>00</div>
              <div>SEC</div>
            </span>
          </div>
          <h3>OUR LIMITED OFFER</h3>
          <h1>BUY 3 PIZZA GET 1 FOR FREE</h1>
          <a href="#">READ MORE</a>
        </div>
      </div>
      <div class="col-md-12 limited-botom d-lg-none d-flex">
        <div class="row">
          <div class="col-12 image px-0">
            <img src="../../assets/images/demo-0117155819.jpg" alt />
          </div>
          <div class="col-12 limited-desc">
            <div class="contain-limit text-center">
              <div class="timer mb-3">
                <span class>
                  <div>0</div>
                  <div>DAY</div>
                </span>
                <span>
                  <div>00</div>
                  <div>HR</div>
                </span>
                <span>
                  <div>00</div>
                  <div>MIN</div>
                </span>
                <span>
                  <div>00</div>
                  <div>SEC</div>
                </span>
              </div>
              <h3>OUR LIMITED OFFER</h3>
              <h1>BUY 3 PIZZA GET 1 FOR FREE</h1>
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
 
    }
  }
};
</script>

<style lang="scss">
.limited {
  background-image: url("../../assets/images/demo-0117155819.jpg");
  background-attachment: fixed;
  background-position: left center;
  background-size: cover;
  height: 450px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .contain-limit {
    color: white;
    .timer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 15px;
      span {
        padding: 5px 20px;
        margin-left: 20px;
        text-align: center;
        border-radius: 5px;
        display: inline-block;
        background-color: #1a212e;
        div:first-of-type {
          color: #fff;
        }
        div:last-of-type {
          color: #676b74;
        }
      }
    }
    h3 {
      font-weight: 100;
      font-size: 30px;
      margin: 10px 0;
    }
    h1 {
      font-weight: bold;
      // font-size: 30px;
      margin: 10px 0;
    }
    a {
      display: inline-block;
      font-size: 20px;
      margin: 15px 0;
      text-decoration: underline;
      color: #fff;
    }
  }
}

.limited-botom {
  .image {
    img {
      width: 100%;
      height: 300px;
    }
  }
  .limited-desc {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d0333d;
    .contain-limit {
      
      color: white;
      width:80%;
      .timer {
        display: flex;
        justify-content: center;
        margin-left: 15px;

        span {
        padding: 5px 20px;
        margin-left: 20px;
        text-align: center;
        border-radius: 5px;
        display: inline-block;
        background-color: #1a212e;
          div:first-of-type {
            color: #fff;
          }
          div:last-of-type {
            color: #676b74;
          }
        }
      }
      h3 {
        font-weight: 100;
        font-size: 30px;
        margin: 10px 0;
      }
      h1 {
        font-weight: bold;
        font-size: 30px;
        margin: 10px 0;
      }
      a {
        display: inline-block;
        font-size: 20px;
        margin: 15px 0;
        text-decoration: underline;
        color: #fff;
      }
    }
  }
}
</style>