<template>
  <div class="home">
    <Navigation ></Navigation>
    <Aboutbanner/>
    <HelpCenter/>
    <FooterAdd/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Aboutbanner from '@/components/about/Aboutbanner.vue'
import HelpCenter from '@/components/HelpCenter/index.vue'
import FooterAdd from '@/components/footer.vue'
export default {
  name: 'Home',
  components: {
    Navigation,
    FooterAdd,
    Aboutbanner,
    HelpCenter
  }
}
</script>
