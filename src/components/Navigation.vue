<template>
    <div   v-if="isNav" :class="isnavigationBox?'navigationBox':'open'">
        <div class="navigation-nav1">
            <img src="" alt="">
        </div>
        <div class="navigation-nav2">
            <router-link to="" class="nav-text">首页</router-link>
            <router-link to="" class="nav-text">强基计划</router-link>
            <div class="nav-text" @mouseover="productSboxFun()" >{{product}} 
                <i  v-bind:class="isActive? 'icon-home-bar-open':'icon-home-bar-retract'"></i>
                <div class="contactBox"  v-show="productSbox" @mouseout="productSboxFunOut()">
                    <div to="" class="contacttext" style="margin-top:0" @click="productSl('青少年生涯规划及职业发展服务平台')" >青少年生涯规划及职业发展服务平台</div>
                    <div to="" class="contacttext" @click="productSl('青少年心理教育及成长引领AI云平台')">青少年心理教育及成长引领AI云平台</div>
                    <div to="" class="contacttext" @click="productSl('青少年综合素质提升展播遴选平台')">青少年综合素质提升展播遴选平台</div>
                    <div to="" class="contacttext" @click="productSl('教育舆情分析大数据平台')">教育舆情分析大数据平台</div>
                    <div to="" class="contacttext" @click="productSl('学能测评及提升系统')">学能测评及提升系统</div>
                </div>
            </div>
            <div class="nav-text" @mouseover="aboutSboxFun()">{{about}}
                <i v-bind:class="isActiveT? 'icon-home-bar-open':'icon-home-bar-retract'"></i>
                <div class="contactBox" v-show="aboutSbox"  @mouseout="aboutSboxFunOut()">
                    <div to="" class="contacttext" style="margin-top:0" @click="aboutSl('关于我们')" >关于我们</div>
                    <div to="" class="contacttext" @click="aboutSl('联系我们')">联系我们</div>
                    <div to="" class="contacttext" @click="aboutSl('咨询中心')">咨询中心</div>
                    <div to="" class="contacttext" @click="aboutSl('帮助中心')">帮助中心</div>
                </div>
            </div>
        </div>
        <div class="navigation-nav3">登录</div>
    </div>
</template>
<script>
export default {
  name: 'Navigation',
  data(){
        return {
            bannerImg:"",
            isNav:true,
            isnavigationBox:true,
            isOpen:false,
            aboutSbox:false,
            productSbox:false,
            product:'产品与服务',
            about:'关于我们',
            isActive :true,
            isActiveT:true,
            opacitys:{
                opacity:1
            }
        }
    },
    mounted() {
        window.addEventListener("scroll",this.handleScroll)
    },
     destroyed() {
        window.removeEventListener("scroll",this.handleScroll)
    },
    methods: {
          handleScroll(){
              // 获取滚动距离
              var top = document.documentElement.scrollTop || document.body.scrollTop;
              // 如果滚动距离大于900 让导航条出现
               if(top>0){
                   this.productSbox =false
                    this.aboutSbox =false
               }
              if(top>500){
                  // 导航条 isNav = true
                 this.isNav = true;                 
                 this.isOpen = true
                 this.isnavigationBox = false
              }else{
                  // 否则就让导航不显示 
                  this.isNav = true;
                  this.isOpen = false
                 this.isnavigationBox = true
              }
              
          },
          productSboxFunOut(){
              this.productSbox =false
              this.isActive = false
              this.aboutSbox =false
          },
          aboutSboxFunOut(){
               this.aboutSbox =false
              this.productSbox = false
              this.isActiveT = false
          },
          productSboxFun(){
              this.productSbox =true
              this.isActive = true
              this.aboutSbox =false
              this.isActiveT = false
          },
          aboutSboxFun(){
              this.aboutSbox =true
              this.productSbox = false
              this.isActiveT = true
              this.isActive = false
          },
          productSl(e){
              this.productSbox =false
              this.aboutSbox =false
          },
          aboutSl(e){
              this.productSbox =false
              this.aboutSbox =false
            //   this.about = e
          }
    }
}

</script>
<style scoped>
    .open{
        height: .85rem;
        width:20rem;
        left: 50%;
        margin-left:-10rem;
        display: flex;
        justify-content:space-between;
        align-items:center;
        cursor: pointer;
        position: fixed;
        background:#ffffff ;
        z-index: 1;
        padding-left: 2rem;
        padding-right: 2.4875rem;
        box-shadow: 0 8px 20px -6px rgba(4,37,83,0.08);
    }
    .navigationBox{
        height: 1rem;
        width:16rem;
        left: 50%;
        margin-left:-8rem ;
        display: flex;
        justify-content:space-between;
        align-items:center;
        cursor: pointer;
        position: absolute;
        margin-top: .5rem;
        background:#ffffff ;
        z-index: 1;
         box-shadow: 0 .1rem .25rem 0 rgba(4,37,83,0.08);
    }
    .navigation-nav1{
        width: 1.95rem;
        height: .5rem;
        margin-left: .375rem;
        background: url(../assets/images/home-bar-logo.png);
        background-size: cover;
    }
    .navigation-nav2{
        width:6.8rem;
        display: flex;
        justify-content:space-between;
        align-items:center;
        font-size: .25rem;
        font-family: MicrosoftYaHei;
        color: #33363E;
        letter-spacing: 0;


        
    }
    .navigation-nav3{
        background: #0089FF;
        border-radius: 2px;
        border-radius: 2px;
        width: 1.5rem;
        height: .575rem;
        margin-right: .375rem;
        font-family: MicrosoftYaHei;
        font-size: .225rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        line-height: .575rem;
    }
		.navigation-nav3:hover{
			background: #4DACFF;
		}
		.navigation-nav3:active{
			background: #006ECD;
		}
    .nav-text{
        color:#33363E;
    }
    .nav-text:hover{
        color: #0089FF;
    }
    i{
        font-size: .175rem;
    }
    .contactBox{
        position: absolute;
        padding: .5rem;
        background:#ffffff;
        top: 1.05rem;
        box-shadow: 0 .1rem .25rem 0 rgba(4,37,83,0.08);
    }
    .contacttext{
        font-family: MicrosoftYaHei;
        font-size: .25rem;
        color: #565A66;
        width: 100%;
        line-height: .688rem;
    }
    .contacttext:hover{
        color: #0089FF;
    }
</style>