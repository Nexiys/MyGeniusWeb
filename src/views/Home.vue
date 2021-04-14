<template>
  <div class="home">
    <Navigation ></Navigation>
    <Banner/>
    <Contentone/>
    <Contenttwo/>
    <Contentthree/>
    <Contentfour/>
    <Contentfive/>
    <FooterAdd/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import Banner from '@/components/Banner.vue'
import Contentone from '@/components/Contentone.vue'
import Contenttwo from '@/components/Contenttwo.vue'
import Contentthree from '@/components/Contentthree.vue'
import Contentfour from '@/components/Contentfour.vue'
import Contentfive from '@/components/Contentfive.vue'
import FooterAdd from '@/components/footer.vue'
export default {
  name: 'Home',
  components: {
    Navigation,
    Banner,
    Contentone,
    Contenttwo,
    Contentthree,
    Contentfour,
    Contentfive,
    FooterAdd
  }
}
</script>
