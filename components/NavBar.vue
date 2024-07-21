<template>
  <nav class="nav-bar">
    <span class="nav-bar__logo pointer">
      <NuxtLink to="/">
        <span class="color-primary fw-600">TARUN</span> PATEL
      </NuxtLink>
    </span>
    <span class="nav-bar__menu-icon" @click="showMenu = !showMenu">
      <i v-if="showMenu" class="icon-cross"></i>
      <i v-else class="icon-menu"></i>
    </span>
    <ul class="nav-bar__links">
      <li><NuxtLink to="/"> Home</NuxtLink></li>
      <li><NuxtLink to="/about"> About</NuxtLink></li>
      <li><NuxtLink to="/projects"> Projects</NuxtLink></li>
      <li><NuxtLink to="/contact"> Contact</NuxtLink></li>
      <span ref="selected-indicator" class="selected-indicator"></span>
      <button
        class="download-resume pointer px-6 py-1 rounded fw-400 border-primary"
        @click="openResume"
      >
        <i class="icon-arrow-up"></i>

        Resume
      </button>
    </ul>
    <transition name="menu">
      <ul class="nav-bar__mobile-menu" :class="{ open: showMenu }">
        <li><NuxtLink to="/"> Home</NuxtLink></li>
        <li><NuxtLink to="/about"> About</NuxtLink></li>
        <li><NuxtLink to="/projects"> Projects</NuxtLink></li>
        <li><NuxtLink to="/contact"> Contact</NuxtLink></li>
        <li @click="openResume">Resume</li>

        <SocialIcons class="menu-social" />
      </ul>
    </transition>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  watch: {
    $route() {
      this.showMenu = false
      this.$nextTick(() => this.resetIndicator())
    },
  },
  mounted() {
    this.resetIndicator()
  },
  methods: {
    openResume() {
      window.open('/resume.pdf', '_blank')
    },
    resetIndicator() {
      const selectedIndicator = this.$refs['selected-indicator']
      const currentLeft = selectedIndicator.offsetLeft
      const parentElement =
        this.$el.querySelector('.nav-bar__links .nuxt-link-exact-active') &&
        this.$el.querySelector('.nav-bar__links .nuxt-link-exact-active')
          .parentElement
      if (!parentElement) {
        selectedIndicator.style.display = 'none'
        return
      }
      selectedIndicator.style.display = 'block'
      const offsetLeft = parentElement.offsetLeft
      const clientWidth = parentElement.clientWidth
      const relocation = Math.abs(currentLeft - offsetLeft) / (88 * 4)
      selectedIndicator.style.transition = `${relocation}s ease left`
      selectedIndicator.style.left = offsetLeft + 'px'
      selectedIndicator.style.width = clientWidth + 'px'
    },
  },
}
</script>
