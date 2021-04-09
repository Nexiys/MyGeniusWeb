<template>
    <div class="Contentfive-box">
        <div class="f-box">
            <div class="f-t-box f-t-img"></div>
            <div class="f-t-box f-t-text">
                <h4>23套测评题目全维更权威</h4>
                <p>牵手清华、北大、人大等多位心理学教授、博士进行研发的23套测评题型为政府、学校、家长、孩子通过全面的、权威的心理测评报告，多个维度进行分析</p>
            </div>
            <div class="btn-left">
                <i class="icon-about-information-last"></i>
            </div>
            <div class="btn-right">
                <i class="icon-about-information-next"></i>
            </div>
        </div>
        <div class="fi-b-box">
            <div class="fi-bot-box">
                <h4>联系我们</h4>
                <p>联系电话：400-820-8820</p>
                <p>公司邮箱：tswc@tcjy.cn</p>
                <p>投诉建议：483920(QQ)</p>
            </div>
            <div class="fi-bot-box">
                <h4>服务条款</h4>
                <p>《天生我才用户协议》</p>
                <p>《网站使用规范》</p>
                <p>《隐私政策》</p>
            </div>
            <div class="fi-bot-box fi-bot-box3 ">
                <h4>备案信息</h4>
                <p>京ICP备2021314-1</p>
                <p>公安网备案202013120</p>
                <p>增值电信运营许可证AI-202013132</p>
            </div>
            <div class="fi-bot-box">
                <h4>关注我们</h4>
                <div class="icon-img-box">
                    <div  @mouseover="BfunShow" @mouseout="BfunShow" >  
                        <i class="icon-home-footer-wechat"></i>
                    </div>
                    <div><i class="icon-home-footer-tiktok"></i></div>
                    <div><i class="icon-home-footer-weibo"></i></div>
                </div>
                <div class="webchat-img" v-show="ishow">
                   <h6>微信订阅号</h6>
                   <img src="../assets/images/home-footer-QRcode.png" alt="">
                </div>
                <!-- <div class="webchat-img2" v-show="ishow">
                   <h6>抖音</h6>
                   <img src="../assets/images/home-footer-QRcode.png" alt="">
                </div> -->
                <!-- <div class="webchat-img3" v-show="ishow">
                   <h6>微博</h6>
                   <img src="../assets/images/home-footer-QRcode.png" alt="">
                </div> -->
                <div class="icon-img-box">
                    <p>微信</p>
                    <p>抖音</p>
                    <p>微博</p>
                </div>
            </div>
        </div>
        <div class="footer">版权所有 © 2021京ICP备2020046658号-1</div>
    </div>
</template>
<script>
export default {
  name: 'Contentfive',
  data(){
        return {
            ishow:false
        }
    },
    mounted() {
       
    },
     destroyed() {
       
    },
    methods: {
        BfunShow(){
            this.ishow=! this.ishow
        }
    }
}
</script>
<style scoped>
		.f-box{
        width: 16rem;
        height: 5.25rem;
        position: absolute;
        left: 50%;
        margin-left: -8rem;
        top: -2.625rem;
				box-shadow: 0 2px 34px 0 rgba(4,37,83,0.10);
        display: flex;
        justify-content:space-between;
    }
    .f-t-box{
        width: 8rem;
        height: 5.25rem;
    }
    .f-t-img{
        background: url(../assets/images/home-product.png);
        background-size: 100% 100%;
    }
    .f-t-text{
        padding: 1.475rem 1.325rem 0 1.325rem;
        background: #ffffff;
    }
    .f-t-text h4{
        text-align: left;
        font-family: MicrosoftYaHei;
        font-size: .325rem;
        color: #33363E;
        letter-spacing: 0;
        line-height: .325rem;
    }
    .f-t-text p{
        margin-top: .375rem;
        text-align: left;
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: justify;
        line-height: .4rem;
    }
    .btn-left{
        width: .625rem;
        height: 1rem;
        background: #0089FF;
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
        display: flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }
    .btn-right{
        width: .625rem;
        height: 1rem;
        background: #0089FF;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -.5rem;
        display: flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }
		.btn-left:hover,.btn-right:hover{
			background: #4DACFF;
		}
		.btn-left:active,.btn-right:active{
			background: #006ECD;
		}
		.btn-left>i,.btn-right>i{
				color: #fff;
		}


    .Contentfive-box{
      width: 100%;
      height: 7.5375rem;
      position: relative;
      background: #042553;
      padding-top: 3.9rem;

    }
    .fi-b-box{
        width: 13.25rem;
        height: 1.75rem;

        margin:  0 auto;
        margin-bottom: .75125rem;
        display: flex;
        justify-content:space-between;
    }
    .fi-bot-box{
        
        width: 3.125rem;
        height: 1.75rem;
        text-align: left;
        position: relative;
        
    }
    h4{
        font-family: MicrosoftYaHei;
        font-size: .225rem;
        color: #C3CEDE;
        letter-spacing: 0;
        margin-bottom: .24875rem;
    }
    .fi-bot-box p{
        line-height: .425rem;
        font-family: MicrosoftYaHei;
        font-size: .175rem;
        color: #C3CEDE;
        letter-spacing: 0;
    }
    .fi-bot-box3{
        width: 3.8rem;
    }
    .icon-img-box{
        
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
       
    }
    .icon-img-box p{
        width: .675rem;
        text-align: center;
        margin-top:.135rem ;
    }
    .icon-img-box div{
        width: .675rem;
        height: .675rem;
        background: #00193B;
        border-radius: .025rem;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    i{
        font-size: .451rem;
        color: #C3CEDE;
    }
    .footer{
        height: 1.125rem;
        border-top: 1px solid rgba(255,255,255,0.2);
        line-height:1.125rem;
        font-family: MicrosoftYaHei;
        font-size: .175rem;
        color: #C3CEDE;
        letter-spacing: 0;
        text-align: center;
    }
    .webchat-img{
        width: 1.8rem;
        height: 2.275rem;
        background: #ffffff;
        position: absolute;
        bottom: 1.35rem;
        left: -0.6rem;
        padding: 0 .15rem .15rem .15rem ;
    }

    h6{
        margin-top: .15rem;
        font-family: MicrosoftYaHei;
        font-size: .225rem;
        color: #848894;
        letter-spacing: 0;
        text-align: center;
        line-height: .225rem;
    }
    img{
        width: 1.5rem;
        height: 1.5rem;
        margin-top: .29rem;
    }
    .icon-about-information-last .icon-about-information-next{
        font-size: .3625rem;
        color: #ffffff;
    }
    .icon-home-footer-wechat:hover{
        color:#0089FF;
    }
</style>