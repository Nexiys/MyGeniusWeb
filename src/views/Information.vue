<template>
  <div class="home">
    <Navigation ></Navigation>
    <Aboutbanner/>
    <Information/>
    <FooterAdd/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Aboutbanner from '@/components/about/Aboutbanner.vue'
import Information from '@/components/Information/index.vue'
import FooterAdd from '@/components/footer.vue'
export default {
  name: 'Home',
  components: {
    Navigation,
    FooterAdd,
    Aboutbanner,
    Information
  }
}
</script>
