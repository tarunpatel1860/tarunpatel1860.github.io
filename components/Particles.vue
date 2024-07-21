<template>
  <div id="particles-js"></div>
</template>

<script>
import particles from '@/assets/scripts/particlesv2'

export default {
  mounted() {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticleJS()
    })
  },
  methods: {
    initParticleJS() {
      // eslint-disable-next-line no-undef
      particlesJS('particles-js', particles)
    },
  },
}
</script>

<style lang="scss">
#particles-js {
  z-index: -5;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(45deg, #171717, #242424);
}
</style>
