<template>
  <div class="footer text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-3">
          <h2 class="font-weight-bold py-3">Subscribe to Newsletter</h2>
          <div class="underline"></div>
          <p class="pb-3">
            Subscribe to the weekly newsletter for all the latest updates
          </p>
          <form>
            <input
              class="btn btn-outline text-white"
              type="email"
              placeholder="Your email address"
            />
            <input class="btn" type="submit" value="Sign up" />
          </form>
        </div>
        <div class="address col-md-12 py-5">
          <div class="row">
            <div class="col-md-3">
              <img src="../assets/images/demo1-0616827188.svg" alt="" />
              <ul>
                <li><span class="icon"></span></li>

                <li class="p-2 font-weight-bold">
                  02 <strong>01224393743</strong> - 02 <strong>01146289998</strong>
                </li>
                <li></li>
                <li>Cairo,Egypt</li>
              </ul>
            </div>
            <div class="our-menu col-md-3">
              <h5>Our Menu</h5>
              <ul>
                <li><a href="#">Pizza</a></li>
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Sushi</a></li>
                <li><a href="#">Steaks</a></li>
                <li><a href="#">Drinks</a></li>
              </ul>
            </div>
            <div class="pages col-md-3">
              <h5>Pages</h5>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Blog Post</a></li>
                <li><a href="#">Wishlist</a></li>
              </ul>
            </div>
            <div class="help col-md-3">
              <h5>How can we help</h5>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright col-md-12">
          <span>© Copyright 2021 BY Mostafa AbdEl Hadi - FRONT-END DEVELOPER</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$colores: #8b8e93;
.footer {
  h2 {
    font-size: 35px;
    text-transform: uppercase;
    margin-bottom: 30px;
    text-decoration: #fe8128 wavy underline 3px;
    text-underline-position: under;
  }

  input[type="email"] {
    padding: 7px 10%;
    border: 1px solid $colores;
    border-radius: 5px;
    text-align: center;
    margin-right: 10px;
    box-shadow: $colores;
  }
  input[type="submit"] {
    padding: 6px 40px;
    font-size: 1.1rem;
    background-color: #fff;
    color: $colores;
  }
  p {
    font-size: 20px;
    font-weight: 100;
    color: $colores;
  }
  ul {
    padding-left: 0;
  }
  ul li {
    list-style: none;
    padding-left: 0;
    margin-bottom: 10px;
    font-weight: 100;
    color: $colores;
  }
  ul li a {
    color: $colores;
    text-decoration: none;
    font-size: 18px;
  }
}
.copyright {
  color: $colores;
  text-align: center;
}
</style>
