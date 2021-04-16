<template>
    <div class="Contenttwo-box">
        <h2>应用场景</h2>
        <p class="top-text">全面了解孩子心理状况，多维度测评找出突击方向，从学习到学业到职业的全生涯规划</p>
        <div class="text-box">
            <div class="cont-left">
                <i class="icon-home-scene-topleft"></i>
                <i class="icon-home-scene-lowerright"></i>
                <h3>心理教育与成长引领</h3>
                <p class="cont-left-p">全维测评，全方位了解孩子心理健康，便于学校、政府、家长加深了解并做定向提升及培养，集中优质教育资源做质量提升。</p>
            </div>
            <div class="cont-right">
                <div class="cont-right-box mouse-hover">
                    <i class="icon-home-scene-city"></i>
                    <h4>市尖子生选拔</h4>
                    <p class="cont-p">政府采买，通过全维心理测评，面向全市选班“强基班”，定向冲击36所超一流学府提升全市高端人才培养</p>
                </div>
                <div class="cont-right-box mouse-hover">
                    <i class="icon-home-scene-school"></i>
                    <h4>学校尖子生选拔</h4>
                    <p class="cont-p">由学校领导，在本校进行筛选选拔，挑选拥有相应潜力潜能的学生进行定向培养、定向输送，提高本校升学率</p>
                </div>
                <div class="cont-right-box mouse-hover">
                    <i class="icon-home-scene-promote"></i>
                    <h4>学生自我了解与提升</h4>
                    <p class="cont-p">学生自测，对自己进行全面、权威立体的了解，扩大优势补充不足，结合自身情况进行整体生涯规划</p>
                </div>
                <div class="cont-right-box mouse-hover">
                    <i class="icon-home-scene-understand"></i>
                    <h4>家长全面了解孩子</h4>
                    <p class="cont-p">全面了解孩子，结合家庭情况及孩子兴趣，从学习到学业到职业进行整体规划</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Contenttwo',
    data(){
        return {
            ishow:false
        }
    },
}
</script>
<style scoped>
    .Contenttwo-box{
				width: 100%;
				height: 12.2rem;
				padding-left: 2rem;
				padding-right: 2.5rem;
				padding-top: 1rem;
				padding-bottom: 1.25rem;
				background: #F2F5F9;
    }
    h2{
        font-family: MicrosoftYaHei-Bold;
        font-size: .525rem;
        color: #33363E;
        letter-spacing: 0;
        text-align: center;
        line-height: .525rem;
    }
    .top-text{
        margin-top: .375rem;
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: center;
    }
    .text-box{
        margin-top: .75rem;
        width: 16rem;
        display: flex;
        justify-content:space-between;
    }
    .cont-left{
        width: 5.075rem;
        height: 7.975rem;
        background: url(../assets/images/home-scene.png);
        background-size: 100% 100%;
        position: relative;
    }
    .cont-right{
        width: 10.5375rem;
        height: 7.975rem;
        display: flex;
        justify-content:space-between;
        flex-wrap:wrap;
				align-content: space-between;
    }
    .cont-right-box{
        width: 5.075rem;
        height: 3.8rem;
        padding: 0 .5rem .5rem .5rem;
        background: #fff;
				box-shadow: 0 8px 20px -6px rgba(4,37,83,0.08);
        border: .025rem solid #ffffff;
        position: relative;
    }
    .cont-right-box i{
        font-size: .625rem;
        position: absolute;
        left: .5rem;
        top: .5rem;
    }
    h3{
        margin-top: 1.75rem;
        font-family: MicrosoftYaHei-Bold;
        font-size: .375rem;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: .4rem;
        text-align: center;
    }
    .cont-left-p{
        margin-top: .625rem;
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: justify;
        line-height: .4rem;
        width: 3.575rem;
        position: absolute;
        right: 50%;
        margin-right: -1.7875rem;
    }
    h4{
        margin-top: 1.525rem;
        font-family: MicrosoftYaHei;
        font-size: .325rem;
        color: #33363E;
        letter-spacing: 0;
        line-height: .325rem;
        text-align: left;
    }
    .cont-p{
        margin-top: .25rem;
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: justify;
        line-height: .4rem;
        text-align: left;
    }
    .icon-home-scene-topleft{
        font-size: .4375rem;
        position: absolute;
        left: .75rem;
        top: .75rem;
        opacity: 0.5;
        /* transform: rotate(-180deg); */
        color: #FFFFFF;
    }
    .icon-home-scene-lowerright{
        font-size: .4375rem;
        position: absolute;
        right: .75rem;
        bottom: .75rem;
        opacity: 0.5;
        /* transform: rotate(-180deg); */
        color: #FFFFFF;
    }
		.icon-home-scene-city{
				color: #0089FF;
		}
		.icon-home-scene-school{
				color:#41B983;
		}
		.icon-home-scene-promote{
				color:#FAA64F;
		}
		.icon-home-scene-understand{
				color: #EE5C4A;
		}
    .mouse-hover:hover{
        border: .025rem solid #0089FF;
        box-shadow: 0 8px 20px -6px rgba(4,37,83,0.08);
    }
</style>