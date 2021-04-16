<template>
    <div class="content-three">
        <h2>专家团队</h2>
        <div class="content-three-box">
          <div class="img1">
            <div class="text-b">
              <h3>张曼文</h3>
              <p>国内著名心理学家</p>
            </div>
          </div>
          <div class="img2"> <div class="text-b"><h3>张曼文</h3>
              <p>国内著名心理学家</p></div></div>
          <div class="img3"> <div class="text-b"><h3>张曼文</h3>
              <p>国内著名心理学家</p></div></div>
          <div class="img4"> <div class="text-b"><h3>张曼文</h3>
              <p>国内著名心理学家</p></div></div>
          <div class="img5"> <div class="text-b"><h3>张曼文</h3>
              <p>国内著名心理学家</p></div></div>
          <div class="img6"> <div class="text-b"><h3>张曼文</h3>
              <p>国内著名心理学家</p></div></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Contentthree',
    data(){
        return {
            bannerImg:"",
        }
    },
    methods:{

    }
}
</script>
<style scoped>
 .content-three{
   padding-top: 3.0875rem;
   padding-left: 2rem;
   padding-right: 2rem;
   padding-bottom: 1.25rem;
   background: #ffffff;
 }
 h2{
    font-family: MicrosoftYaHei-Bold;
    font-size: .525rem;
    color: #33363E;
    letter-spacing: 0;
    text-align: center;
    line-height: .525rem;
 }
 .content-three-box{
   /* height: 14.25rem; */
   background: #ffffff;
        display: flex;
     justify-content: space-between;
     flex-wrap:wrap;
 }
 .img1{
   width: 5.075rem;
   height: 6.75rem;
   background: #FFFFFF  url(../../assets/images/about-us-expert1.png) no-repeat;
   background-size: 100% 100%;
   margin-top: .75rem;
   position: relative;
 }
  .img2{
   width: 5.075rem;
   height: 6.75rem;
   background: #FFFFFF  url(../../assets/images/about-us-expert2.png) no-repeat;
   background-size: 100% 100%;
   margin-top: .75rem;
   position: relative;
 }
  .img3{
   width: 5.075rem;
   height: 6.75rem;
   background: #FFFFFF  url(../../assets/images/about-us-expert3.png) no-repeat;
   background-size: 100% 100%;
   margin-top: .75rem;
   position: relative;
 }
   .img4{
   width: 5.075rem;
   height: 6.75rem;
   background: #FFFFFF  url(../../assets/images/about-us-expert4.png) no-repeat;
   background-size: 100% 100%;
   margin-top: .75rem;
   position: relative;
 }
   .img5{
   width: 5.075rem;
   height: 6.75rem;
   background: #FFFFFF  url(../../assets/images/about-us-expert5.png) no-repeat;
   background-size: 100% 100%;
   margin-top: .75rem;
   position: relative;
 }
   .img6{
   width: 5.075rem;
   height: 6.75rem;
   background: #FFFFFF  url(../../assets/images/about-us-expert6.png) no-repeat;
   background-size: 100% 100%;
   margin-top: .75rem;
   position: relative;
 }
 .text-b{
   width: 5.075rem;
   height: 1.575rem;
   background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.80) 100%);
    box-shadow: 0 8px 20px -6px rgba(4,37,83,0.08);
    position: absolute;
    bottom: 0;
    padding: .375rem;
 }
 h3{
    font-family: MicrosoftYaHei-Bold;
    font-size: .375rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: .375rem;
    text-align: left;
 }
 p{
    font-family: MicrosoftYaHei;
    font-size: .25rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: justify;
    line-height: .25rem;
    margin-top: .2rem;
 }
</style>