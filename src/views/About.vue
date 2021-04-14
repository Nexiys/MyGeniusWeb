<template>
  <div class="home">
    <Navigation ></Navigation>
    <Aboutbanner/>
    <Contentone/>
    <Contenttwo/>
    <Contentthree/>
    <Contentfour/>
    <FooterAdd/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Aboutbanner from '@/components/about/Aboutbanner.vue'
import Contentone from '@/components/about/Contentone.vue'
import Contenttwo   from '@/components/about/Contenttwo.vue'
import Contentthree from '@/components/about/Contentthree.vue'
import Contentfour  from '@/components/about/Contentfour.vue'
import FooterAdd from '@/components/footer.vue'
export default {
  name: 'Home',
  components: {
    Navigation,
    FooterAdd,
    Aboutbanner,
    Contentone,
    Contenttwo,
    Contentthree,
    Contentfour

  }
}
</script>
