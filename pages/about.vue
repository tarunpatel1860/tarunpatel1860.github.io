<template>
  <div
    v-touch:swipe="changeRouteOnSwipe"
    class="about"
    @mousewheel="goNextThrottle"
  >
    <!--    <h1 class="about__head">-->
    <!--      &lt;!&ndash;      <a href="http://goodreads.com/tarunpatel1860"&ndash;&gt;&ndash;&gt;-->
    <!--      &lt;!&ndash;        target="_blank"&ndash;&gt;-->
    <!--      &lt;!&ndash;        rel="noopener noreferrer"&ndash;&gt;-->
    <!--      &lt;!&ndash;      >&ndash;&gt;-->
    <!--      <span class="color-primary">I read!</span>-->
    <!--      &lt;!&ndash;      </a>&ndash;&gt;-->
    <!--      <span class="color-primary">I code!</span>-->
    <!--      <a-->
    <!--        href="http://tarunpatel1860.wordpress.com"-->
    <!--        target="_blank"-->
    <!--        rel="noopener noreferrer"-->
    <!--      >-->
    <!--        <span class="color-primary">I write!</span>-->
    <!--      </a>-->
    <!--    </h1>-->
    <main class="about__main mt-3">
      <section class="about__main__content">
        <p>
          Hello, World! <br />
          My name is <span class="color-primary">Tarun Patel</span>.
        </p>
        <p>
          I work as a Senior Software Engineer at Visa. When not working, I use
          my time to watch cricket or play cricket.
        </p>
        <p>
          My skills include <span class="color-primary">Java</span>,
          <span class="color-primary">Spring</span>,
          <span class="color-primary">Cloud Computing</span> and
          <span class="color-primary">Distributed System</span>. I keep on
          trying my hands at new stacks and things, and I am currently exploring
          <span class="color-primary">GenAI</span>
        </p>
        <p>
          I am always open to work on some cool and exciting ideas. Feel free to
          <span
            class="color-primary pointer underline"
            @click="$router.push('/contact')"
          >
            involve me </span
          >!
        </p>
      </section>
      <img class="about__main__image" src="@/assets/images/me.jpg" alt="" />
    </main>

    <!-- <h2>
      I am a full stack web developer who enjoys reading and writing when he is
      not in front of the computer!
    </h2>
    <h3 class="mt-2">
      Challenge me for a game of
      <a title="Under Construction">
        <span class="color-primary">minesweeper</span>
      </a>
    </h3>
    <h3 class="mt-2">
      A collection of technologies, I have heard about:
      <div class="about-skills my-2">
        <span>C++</span><span>HTML</span><span>CSS</span><span>JavaScript</span
        ><span>Python</span><span>Vue.js</span><span>Nuxt.js</span
        ><span>Next.js</span><span>React</span><span>SCSS</span
        ><span>Bootstrap</span><span>Node.js</span><span>Express</span
        ><span>MongoDB</span>
      </div>
      (*and work on)
    </h3>
    <p class="mt-2">
      Catch up with my writings at:
      <a
        href="http://tarunpatel1860.wordpress.com"
        target="_blank"
        rel="noopener noreferrer"
        class="color-primary"
        >tarunpatel1860.wordpress.com</a
      >
    </p> -->
  </div>
</template>

<script>
import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
import headMixin from '~/headMixin'
export default {
  mixins: [changeRouteOnScrollMixin, headMixin],
  data() {
    return {
      title: 'About Me - tarunpatel1860',
    }
  },
  computed: {
    text() {
      return 'developer'
    },
  },
}
</script>
