<template>
    <div class="contcat">
        <div class="cont-cent">
            <i class="icon-about-contact-telephone" style="color:#0089FF"></i>
            <h2>联系电话</h2>
            <p>400-820-8820</p>
        </div>
        <div class="cont-cent">
            <i class="icon-about-contact-mailbox" style="color:#41B983"></i>
            <h2>公司邮箱</h2>
            <p>tswc@tcjy.cn</p>
        </div>
        <div class="cont-cent">
            <i class="icon-about-contact-proposal" style="color:#FAA64F"></i>
            <h2>投诉建议</h2>
            <p>483920 (QQ)</p>
        </div>
        <div class="cont-cent">
            <i class="icon-about-contact-address" style="color:#EE5C4A"></i>
            <h2>公司地址</h2>
            <p>北京市朝阳区建外SOHO15号楼27层</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'contcat',
    data(){
        return {
            ishow:false
        }
    },
}
</script>
<style scoped>
    .contcat{
        padding: 1.25rem 2rem;
        display: flex;
        justify-content:space-between;
        flex-wrap:wrap;
        
    }
    .cont-cent{
        width:7.8125rem;
        height: 3.15rem;
        position: relative;
        background: #F2F5F9;
        margin-bottom: .375rem;
    }
    i{
        content: '';
        font-size: .6875rem;
        position: relative;
        text-align: center;
        top: .68625rem;
    }
    h2{
        font-family: MicrosoftYaHei-Bold;
        font-size: .325rem;
        color: #33363E;
        letter-spacing: 0;
        text-align: center;
        line-height: .325rem;
        margin-top: 1.0125rem;
    }
    p{
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #565A66;
        letter-spacing: 0;
        text-align: center;
        line-height: .25rem;
        margin-top: .2rem;
    }
</style>