<template>
    <div class="banner-box">
        <h2>青少年心理教育与成长引领AI云平台</h2>
        <p>专注青少年心理健康 | 提供个性化教育指导</p>
        <a class="btn" href=" http://www.mygenius.cn">进入系统</a>
    </div>
</template>
<script>
export default {
  name: 'Banner',
    data(){
        return {
            ishow:false
        }
    },
}
</script>
<style scoped>
    .banner-box{
        width: 100%;
        height: 9rem;
        background: url(../assets/images/home-banner.png);
        background-size: 100% 100%;
        padding-top: 3rem;
    }
    h2{
        font-family: MicrosoftYaHei-Bold;
        font-size: .7rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        /* margin-top: 3rem; */
    }
    p{
        margin-top: .25rem;
        font-family: MicrosoftYaHei;
        font-size: .325rem;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: .525rem;
    }
    .btn{
        display: block;
        margin-top: .625rem;
        position: absolute;
        left: 50%;
        margin-left: -2rem;
        width: 4rem;
        height: .875rem;
        background: #0089FF;
        border-radius: .025rem;
        font-family: MicrosoftYaHei;
        font-size: .325rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        line-height: .875rem;
    }
		.btn:hover{
			background: #4DACFF;
		}
		.btn:active{
			background: #006ECD;
		}
</style>