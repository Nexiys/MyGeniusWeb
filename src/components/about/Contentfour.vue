<template>
    <div class="content-four">
      <h2>学术合作</h2>
      <div class="content-four-box">
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
        <div class="img-f-b"></div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Contentfour',
    data(){
        return {
            ishow:false
        }
    },
}
</script>
<style scoped>
  .content-four{
    width: 100%;
    height: 8.65rem;
    padding: 1.25rem 2rem;
    background: #F2F5F9;
  }
  h2{
    font-family: MicrosoftYaHei-Bold;
    font-size: .525rem;
    color: #33363E;
    letter-spacing: 0;
    text-align: center;
    line-height: .525rem;
    margin-bottom: .375rem;
  }
  .content-four-box{
    display: flex;
     justify-content: space-between;
     flex-wrap:wrap;
  }
  .img-f-b{
    width: 3.7125rem;
    height: 1.375rem;
    background: #FFFFFF  url(../../assets/images/about-us-unit.png) no-repeat;
    background-size: 2.375rem .75rem;
    margin-top: .375rem;
    background-position: center center;
  }
</style>