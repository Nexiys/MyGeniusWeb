<template>
    <div class="content-two">
        <h2>企业证书</h2>
        <div class="b-img-box">
          <div class="img-box"></div>
          <div class="img-box"></div>
          <div class="img-box"></div>
          <div class="img-box"></div>
          <div class="img-box"></div>
          <div class="img-box"></div>
          <div class="img-box"></div>
          <div class="img-box"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Contenttwo'
}
</script>
<style scoped>
  .content-two{
    width: 100%;
    height: 10.75rem;
    background: url(../../assets/images/about-us-background.png);
    background-size: 100% 100%;
    padding-top:1.25rem;;
    position: relative;
    }
  h2{
      font-family: MicrosoftYaHei-Bold;
      font-size: .525rem;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: .525rem;
    }
  .img-box{
    background: #FFFFFF  url(../../assets/images/about-us-certificate.png) no-repeat;
    box-shadow: 0 8px 20px 0 rgba(4,37,83,0.12);
    width: 3.7125rem;
    height: 5.1rem;
    background-size: 3.3625rem 4.75rem;
    background-position:center center;
    margin-bottom: .375rem;
  }
   .b-img-box{
     position: absolute;
     display: flex;
     justify-content: space-between;
     flex-wrap:wrap;
     padding: 0 2rem;
     margin-top: .75rem;
   }
</style>