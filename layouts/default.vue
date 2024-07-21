<template>
  <div class="def-layout" :class="{ 'no-stars': !stars }">
    <NavBar />
    <Nuxt />
    <span
      :key="'scroll' + (scrollText.up && scrollText.down)"
      class="scroll-down"
    >
      <i v-if="scrollText.down" class="icon-arrow-left mr-2"></i>
      <span class="px-2">scroll</span>
      <i v-if="scrollText.up" class="icon-arrow-right ml-2"></i>
    </span>
    <span :key="'swipe' + (scrollText.up && scrollText.down)" class="swipe">
      <i v-if="scrollText.down" class="icon-arrow-left mr-2"></i>
      <span class="px-2">swipe</span>
      <i v-if="scrollText.up" class="icon-arrow-right ml-2"></i>
    </span>
    <footer>
      <SocialIcons />
    </footer>
    <client-only>
      <Particles class="particles"></Particles>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars: true,
    }
  },
  computed: {
    scrollText() {
      const scrollText = {}
      switch (this.$route.name) {
        case 'index':
          scrollText.down = true
          break
        case 'projects':
        case 'about':
          scrollText.down = true
          scrollText.up = true
          break
        case 'contact':
          scrollText.up = true
      }
      return scrollText
    },
  },
}
</script>
