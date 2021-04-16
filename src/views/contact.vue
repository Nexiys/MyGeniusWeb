<template>
  <div class="home">
    <Navigation ></Navigation>
    <Aboutbanner/>
    <Contcat/>
    <FooterAdd/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Aboutbanner from '@/components/about/Aboutbanner.vue'
import Contcat from '@/components/contact/index.vue'
import FooterAdd from '@/components/footer.vue'
export default {
  name: 'Home',
  components: {
    Navigation,
    FooterAdd,
    Aboutbanner,
    Contcat
  }
}
</script>
