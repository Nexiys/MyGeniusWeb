<template>
    <div   v-if="isNav" :class="isnavigationBox?'navigationBox':'open'">
        <div class="navigation-nav1">
            <img src="" alt="">
        </div>
        <div class="navigation-nav2">
            <router-link to="" class="nav-text">首页</router-link>
            <router-link to="" class="nav-text">强基计划</router-link>
            <div class="nav-text">产品与服务</div>
            <div class="nav-text">关于我们</div>
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
               console.log(top);
              if(top>900){
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
        margin-top: .5rem;
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
    .nav-text{
        color:#33363E;
    
    }
    .nav-text:hover{
        color: #0089FF;
    }
</style>