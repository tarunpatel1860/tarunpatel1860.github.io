<template>
  <main
    v-touch:swipe="changeRouteOnSwipe"
    class="home"
    @mousewheel="goNextThrottle"
  >
    <div class="home__content">
      <h2 class="fw-400 mb-2">Hey, I'm Tarun, a</h2>
      <h1 class="color-primary home__content__name">Full Stack Engineer,</h1>
      <!--      <h1 class="color-primary home__content__name">Programmer.</h1>-->

      <h2 class="home__content__head">Welcome to my portfolio website!</h2>
      <div class="home__content__action">
        <button
          class="border-primary px-6 py-1 rounded fw-400 d-inline-flex-center"
          @click="buyMeACupTea"
        >
          Buy Me a Tea! <i class="icon-beer ml-1"></i>
        </button>
        <button
          class="border-primary px-9 py-1 rounded fw-400 ml-2"
          @click="$router.push('/contact')"
        >
          Say hello
        </button>
      </div>
    </div>
    <img class="home__image" :src="bannerImage" alt="Main Page Image" />
  </main>
</template>

<script>
import bannerSVG from '@/assets/images/main.svg'
import bannerPNG from '@/assets/images/main.png'
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
import headMixin from '~/headMixin'
export default {
  mixins: [changeRouteOnScrollMixin, headMixin],
  data() {
    return {
      title: 'Hi, I am Tarun Patel | Full-Stack Developer',
    }
  },
  computed: {
    bannerImage() {
      return Math.floor(Math.random() * 100) & 2 ? bannerSVG : bannerPNG
    },
  },
  methods: {
    buyMeACupTea() {
      window.open(
        'https://buymeacoffee.com/tarunpatelx',
        '_blank',
        'noopener noreferrer'
      )
    },
  },
}
</script>
