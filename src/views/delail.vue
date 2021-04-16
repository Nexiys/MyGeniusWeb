<template>
  <div class="home">
    <Navigation ></Navigation>
    <Detail/>
    <FooterAdd/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Aboutbanner from '@/components/about/Aboutbanner.vue'
import Detail from '@/components/Information/detail.vue'
import FooterAdd from '@/components/footer.vue'
export default {
  name: 'Home',
  components: {
    Navigation,
    FooterAdd,
    Aboutbanner,
    Detail
  }
}
</script>
