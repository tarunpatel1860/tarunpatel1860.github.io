export default {
  data() {
    return {
      goNext: () => {},
      goNextThrottle: () => {},
    }
  },
  mounted() {
    this.goNext = this.debounce(this.changeRoute)
    this.goNextThrottle = this.throttle(this.changeRoute)
  },
  methods: {
    changeRoute(e) {
      const isDownScroll = e.wheelDeltaY < 0
      this.routePush(isDownScroll)
    },
    changeRouteOnSwipe(swipe) {
      const isLeftSwipe = swipe === 'left'
      this.routePush(isLeftSwipe)
    },
    routePush(check) {
      switch (this.$route.name) {
        case 'index':
          check && this.$router.push('/about')
          return
        case 'about':
          check ? this.$router.push('/projects') : this.$router.push('/')
          return
        case 'projects':
          check ? this.$router.push('/contact') : this.$router.push('/about')
          return
        case 'contact':
          !check && this.$router.push('/projects')
      }
    },
    debounce(func, wait = 1000, immediate = true) {
      let timeout
      return function executedFunction() {
        const context = this
        const args = arguments

        const later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)

        timeout = setTimeout(later, wait)

        if (callNow) func.apply(context, args)
      }
    },
    throttle(func, wait = 1000) {
      let time = Date.now()
      return function executedFunction() {
        const context = this
        const args = arguments

        if (time + wait - Date.now() < 0) {
          func.apply(context, args)
          time = Date.now()
        }
      }
    },
  },
}
