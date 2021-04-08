<template>
    <div class="Contentthree-box">
        <h2>个性画像的优势</h2>
        <p>最大程度反映孩子心理健康及性格倾向，帮助学校、家长全面了解孩子并做定向培养</p>
        <div class="Contentthree-b-box">
            <div class="l-box">
                <div class="iconimg"></div>
                <h3>多元化测评</h3>
                <p>通过自主研发的AI技术结合心理学专家博士研发的全维心理测评，全维度多元化反映孩子心理健康程度及性格倾向，包括适合发展的职业、需提升的方向、日常生活中家长及孩子的注意事项、孩子有可能存在的心理问题等</p>
            </div>
            <div class="l-box">
                <div class="iconimg"></div>
                <h3>大数据+个性化</h3>
                <p>依托AI智适应学习技术加心理测评大数据，同时结合个性化的测评题库，为孩子、学生、家长、学校及政府输出专业的、权威的、准确的、多元的青少年心理健康测评报考，挖掘潜在人才、发现潜在问题、个性化培养输送</p>
            </div>
            <div class="l-box">
                <div class="iconimg"></div>
                <h3>智能解读</h3>
                <p>23套题型、八个维度分析、反应多种性格及心理倾向，结合新高考选科、志愿填报、职业发展给予家长、学校、政府及孩子最专业的报告解读及方向建议，帮助家长更全面、深度的了解孩子，找到适合孩子的发展方向</p>
            </div>
            <div class="l-box">
                <div class="iconimg"></div>
                <h3>权威合作</h3>
                <p>23套测评题目由北大、清华、人大、复旦等多位心理学专家、教授、博士联合完成开发，由中国老教授协会提供全程指导及建议并邀请相关部委领导监督，确保测评结果的专业性、权威性、准确性</p>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
  name: 'Contentthree'
}
</script>
<style scoped>
    .Contentthree-box{
      width: 100%;
      height: 7.5rem;
      background: url(../assets/images/home-advantage.png);
      background-size: 100% 100%;
      padding-top: 1.25rem;
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
    .Contentthree-box p{
        margin-top: .375rem;
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        line-height: .325rem;
    }
    .Contentthree-b-box{
        width: 16rem;
        height: 5.575rem;
        position: absolute;
        left: 50%;
        margin-left: -8rem;
        margin-top: 1.4375rem;
        display: flex;
        justify-content:space-between;
        
    }
    .l-box{
        width: 3.7125rem;
        height: 5.575rem;
        background:#ffffff;
        padding: 0 .5rem .625rem .5rem;
        position: relative;
    }
    .iconimg{
        position: absolute;
        width: 1.375rem;
        height: 1.375rem;
        border-radius: 50%;
        background: #0089FF;
        box-shadow: 0 14px 20px -6px rgba(0,137,255,0.40);
        left: 50%;
        margin-left: -0.6875rem;
        top: -0.6875rem;
    }
    .l-box h3{
        margin-top: 1.2rem;
        font-family: MicrosoftYaHei;
        font-size: .325rem;
        color: #33363E;
        letter-spacing: 0;
        text-align: center;
        line-height: .35rem;
    }
    .l-box p{
        margin-top: .25rem;
        font-family: MicrosoftYaHei;
        font-size: .225rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: justify;
        line-height: .35rem;
    }
</style>