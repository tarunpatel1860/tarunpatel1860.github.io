export default {
  head() {
    return {
      title: this.title,
      link: [
        this.checkDark
          ? { rel: 'icon', type: 'image/x-icon', href: '/favicon-dark.png' }
          : { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        {
          rel: 'canonical',
          href: 'https://tarunpatel1860.github.io',
        },
      ],
      meta: [
        { name: 'author', content: 'Tarun Patel' },
        {
          property: 'og:title',
          content: 'Hi, I am Tarun Patel | Full-Stack Developer',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content:
            'https://cdn.discordapp.com/attachments/1093625537630580819/1093625747094110268/portfolio.png',
        },
        {
          property: 'og:image:url',
          content:
            'https://cdn.discordapp.com/attachments/1093625537630580819/1093625747094110268/portfolio.png',
        },
        {
          property: 'og:url',
          content: 'https://tarunpatel1860.github.io',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'description',
          content:
            'Looking for a highly skilled Full-stack Engineer? Look no further than Tarun Patel. With expertise in JAVA, HTML/CSS, JavaScript, Python and Scala, Tarun is the perfect collaborator for your exciting projects. Contact Tarun today and take your full stack development to the next level.',
        },
        {
          property: 'keywords',
          content:
            'Tarun Patel, tarunpatel1860.github.io, tarunpatel1860me, tarunpatel1860, Tarun, Patel, Developer, FullStack Developer, HTML, CSS, HTML/CSS, Portfolio, JAVA, back-end development, Backend developer, Front-end developer, Back-end developer, Portfolio, API Development, Web applications, App development, Python, SQL, MySQL',
        },
      ],
    }
  },
  methods: {
    checkDark() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    },
  },
}
