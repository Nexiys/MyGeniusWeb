<template>
    <div class="HelpCenter">
        <div>
            <h2>1.  浏览器问题</h2>
            <div class="h-box"><p>建议使用的浏览器：Google Chrome浏览器</p></div>
        </div>
        <div>
            <h2>2.  浏览器下载方法</h2>
            <div class="h-box">
                <div class="img-box"></div>
                <div class="h-l-box">
                    <h3>Google Chrome浏览器  正式版</h3>
                    <p>为保证测评效果，推荐您使用Chrome浏览器，要求Mac 10.10或Windows7以上。注：安装包来自Google官网，安装及使用请遵守软件用户协议。</p>
                    <div class="btn-box">
                        <a href="https://www.google.cn/chrome/" style="margin-right:.375rem">Windows下载</a>
                        <a href="https://www.google.cn/chrome/">Mac下载</a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>3.  无法进入测评</h2>
            <div class="h-box"><p>无法进入测评，出现这样的情况，可以先进入个人中心支付页面，查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。</p></div>   
        </div>
        <div>
            <h2>4.  听不到问题声音</h2>
            <div class="h-box"><p>无法进入测评，出现这样的情况，可以先进入个人中心支付页面，查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。</p></div>
        </div>
        <div>
            <h2>5.  问题有杂音</h2>
            <div class="h-box"><p>无法进入测评，出现这样的情况，可以先进入个人中心支付页面，查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。</p></div>
        </div>
        <div>
            <h2>6.  收费标准</h2>
            <div class="h-box"><p>无法进入测评，出现这样的情况，可以先进入个人中心支付页面，查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。</p></div>
        </div>
        <div>
            <h2>7.  退费须知</h2>
            <div class="h-box"><p>无法进入测评，出现这样的情况，可以先进入个人中心支付页面，查看是否购买了该测评服务；若支付成功，请检查设备检测是否通过；若设备检测通过，重新打开网页来解决这个问题，使网站恢复正常运行。
如有疑问，请您致电400-666-7788</p></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HelpCenter',
    data(){
        return {
            ishow:false
        }
    },
}
</script>
<style scoped>
    .HelpCenter{
        width: 16rem;
        height: auto;
        margin: 0 auto;
        margin-top: .75rem;
        margin-bottom: 1.25rem;
        
    }
    .h-box{
        padding: .375rem .5rem;
        background: #F2F5F9;
        display: flex;
        justify-content: space-between;
    }
    h2 {
        font-family: MicrosoftYaHei;
        font-size: .325rem;
        color: #33363E;
        letter-spacing: 0;
        line-height: .325rem;
        text-align: left;
        margin: .5rem 0;
    }
    p{
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: justify;
        line-height: .4rem; 
    }
    .img-box{
        width: 1.5rem;
        height: 1.5rem;
        background: #FFFFFF;
        border-radius: .3375rem;
    }
    .img-box{
        background: #ffffff url(../../assets/images/about-help-GoogleChrome.png) no-repeat;
        background-position: center center;
        background-size: 1.11375rem 1.11375rem;
        margin-right: .5rem;
    }
    .h-l-box{
        width: 100%; 
    }
    h3{
        font-family: MicrosoftYaHei-Bold;
        font-size: .325rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: left;
        line-height: .325rem;
        margin-bottom: .2rem;
    }
    .btn-box{
        display: flex;
        justify-content: flex-start;
    }
    a{
        background: #0089FF;
        border-radius: .025rem;
        border-radius: .025rem;
        padding: .2125rem .7rem;
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        margin-top: .375rem;
    }
</style>