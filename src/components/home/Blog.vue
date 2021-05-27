<template>
  <div class="blog py-5">
    <div class="container">
      <div class="row text-white">
        <div class="text-title col-md-12 py-5 text-center">
          <h1>Blog Posts</h1>
        </div>
        <div class="col-md-4 py-3">
          <div class="component">
            <div class="img">
              <img
                class="img-fluid"
                src="../../assets/images/demo1-0129613242-750x500.jpg"
                alt
              />
            </div>
            <div class="contain mt-3">
              <div class="span">
                <span>April 1, 2019</span>
                <span> In </span>
                <span> Uncategorized</span>
              </div>
              <h1 class="my-3">Few quips galvanized the mock jury box</h1>
              <p class="my-3">
                The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                prog.
              </p>
              <a class="my-3" href="#">Continue Reading</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 py-3">
          <div class="component">
            <div class="img">
              <img
                class="img-fluid"
                src="../../assets/images/demo1-0137993487-750x938.jpg"
                alt
              />
            </div>
            <div class="contain mt-3">
              <div class="span">
                <span>April 1, 2019</span>
                <span> In </span>
                <span> Uncategorized</span>
              </div>
              <h1 class="my-3">
                A quick movement of the enemy will jeopardize six gunboats
              </h1>
              <p class="my-3">My faxed joke won a pager in the cable TV quiz show.</p>
              <a class="my-3" href="#">Continue Reading</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 py-3">
          <div class="component">
            <div class="img">
              <img
                class="img-fluid"
                src="../../assets/images/demo1-0134238685-750x500.jpg"
                alt
              />
            </div>
            <div class="contain mt-3">
              <div class="span">
                <span>April 1, 2019</span>
                <span> In </span>
                <span> Uncategorized</span>
              </div>
              <h1 class="my-3">Brawny gods just flocked up to quiz and vex him</h1>
              <p class="my-3">
                The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for
                a quick jump.
              </p>
              <a class="my-3" href="#">Continue Reading</a>
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
.blog {
  .text-title {
    h1 {
      font-size: 50px;
      font-weight: bolder;
      text-decoration: #fe8128 wavy underline 3px;
      text-underline-position: under;
    }
  }
  .component {
    .contain {
      .span {
        color: #d0d4da !important;
      }
      h1 {
        font-size: 2rem;
        font-weight: bold;
      }
      p {
        font-weight: 100;
        color: #d0d4da !important;
        font-family: "Roboto", sans-serif !important;
      }
      a {
        font-size: 1.1rem;
        text-decoration: underline;
        color: #fff;
      }
    }
  }
}
</style>
