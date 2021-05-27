<template>
  <div class="foodz container py-5 text-white ">
    <div class="row">
        <div class="col-md-12 col-12 text-center py-5">
            <h2>Foodz – restaurant, pizza, food delivery WP theme</h2>
            <div class="line"></div>
        </div>
      <div class="col-md-6 col-12">
        <p>
          Giving the pizza its unique flavor and texture is our speciality.
          Good sauce, right amount of cheese and great crust sets Fratello
          Pizza apart from other pizza joints .We have a good array of
          delicious pasta, subs, salads in addition to the more traditional
          pizzas and speciality pizzas.
        </p>
      </div>
      <div class="col-md-6 col-12">
        <p>
          The interior is remarkably clean and so brightly lit and shiny that it’s almost sobering.
          Our service is quick, efficient, and polite. Come in or call today and experience the great
          flavor of Food. Good sauce,
          right amount of cheese and great crust sets Fratello Pizza.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
    .foodz{
        h2{
           font-size:25px;
            text-transform: uppercase;
        }
        .line{
          border-bottom: 3px dashed #FE8128;
          width: 20%;
          margin: 20px auto 0;
        }
        p{
            width:80%;
            font-size:19px;
            line-height: 35px;
            color: #B2B7BE;
            margin: auto;

        }
    }

  @media (min-width: 320px) and (max-width: 767px) { 
  .foodz{

        p{
   
          font-size:16px;
        }
    }
  
  }
</style>