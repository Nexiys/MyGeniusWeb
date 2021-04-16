<template>
    <div class="Contentone-box">
      <div class="box-left">
        <h2>青少年心理教育与成长引领AI云平台</h2>
        <p>通过公司自主技术研发，结合清华、北大、人大等多位知名心理学专家、博士综合AI技术及专业心理测评打造青少年心理教育与成长引领云平台，23套题型、一份综合报告、八个维度数值分析综合输出孩子全维度心理测评结果，基于测评报告反映孩子心理健康及职业发展提升方向，学习、专业、职业全生命周期陪护。</p>
        <p>—— 天才智能</p>
      </div>
      <div class="box-right">
        
      </div>
    </div>
</template>
<script>
export default {
  name: 'Contentone',
    data(){
        return {
            ishow:false
        }
    },
}
</script>
<style scoped>
    .Contentone-box{
      width: 100%;
      height: 7.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 1.35rem;
      padding-bottom: 1.25rem;
      display: flex;
      justify-content:space-between;
      position: relative;
    }
    h2{
      font-family: MicrosoftYaHei-Bold;
      font-size: .525rem;
      color: #33363E;
      letter-spacing: 0;
      line-height: .8rem;
      width: 6.3375rem;
      text-align: left;
    }
    p{
      margin-top: .5rem;
      font-family: MicrosoftYaHei;
      font-size: .25rem;
      color: #565A66;
      letter-spacing: 0;
      text-align: justify;
      line-height: .4rem;
      width: 9.175rem;
    }
    .box-right{
      width: 5.475rem;
      height: 7.3rem;
      position: absolute;
      bottom: 1.25rem;
      right: 2rem;
      background: url(../assets/images/home-introduce.png);
      background-size: 100% 100%;
    }
</style>