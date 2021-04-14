<template>
    <div class="Content-one">
        <div class="Content-one-cont1">
            <h2>使命</h2>
            <p>使每一个孩子的人生都精彩</p>
            <h2>愿景</h2>
            <p>成为中国青少年核心素养及综合评价标准体系的制定者</p>
            <h2>核心价值</h2>
            <p>专业、明德、引领、创新</p>
            <h2>价值主张</h2>
            <p>学其所好，考其所长，录其所愿</p>
        </div>
        <div class="Content-one-cont2" ></div>
        <div class="Content-one-cont3">
            <h3>北京天才智能教育科技有限公司</h3>
            <p class="Content-one-cont3-p">公司专注于中国青少年 “个性化”培养，是一家融合“个性化测评”、“个性化教育”和“个性化成长”的智适应学习与成长的智能在线教育高科技公司，位于北京市海淀区中关村国家高新技术核心产业区。拥有国内国际一流的教育资源，跟新闻媒体及北京和全国重点名校长期良好的合作关系。</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Contentone'
}
</script>
<style scoped>
    .Content-one{
        padding: 1.25rem 2rem;
        display: flex;
        justify-content: space-between;
    }
    .Content-one-cont1{
        width: 5.075rem;
        height: 6.75rem;
        background: url(../../assets/images/about-us-us1.png);
        background-size: 100% 100%;
        padding: .75rem;
    }
        .Content-one-cont2{
        width: 5.075rem;
        height: 6.75rem;
        background: url(../../assets/images/about-us-us2.png);
        background-size: 100% 100%;
    }
        .Content-one-cont3{
        width: 5.075rem;
        height: 6.75rem;
        background: #F2F5F9;
        padding: .75rem;
    }
    h2{
        font-family: MicrosoftYaHei-Bold;
        font-size: .325rem;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: .325rem;
        text-align: left;
    }   
    p{
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: justify;
        line-height: .4rem;
        margin-top: .125rem;
        margin-bottom: .5rem;
    }
    h3{
        font-family: MicrosoftYaHei-Bold;
        font-size: .375rem;
        color: #33363E;
        letter-spacing: 0;
        text-align: justify;
        line-height: .6rem;
    }
    .Content-one-cont3-p{
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: left !important;
        line-height: .4rem;
        margin-top: .25rem;
    }
</style>