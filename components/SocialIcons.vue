<template>
  <ul class="social-icons d-flex" :class="className">
    <li v-for="item in iconsList" :key="item.name">
      <a :href="item.link" target="_blank">
        <i :class="'icon-' + item.name"></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'facebook',
          link: 'https://www.facebook.com/tarun.patel.1293575',
        },
        {
          name: 'instagram',
          link: 'https://www.instagram.com/_tarun.patel_/',
        },
        {
          name: 'github',
          link: 'https://github.com/tarunpatel1860',
        },
        {
          name: 'linkedin',
          link: 'https://linkedin.com/in/tarunpatel1860',
        },
        {
          name: 'twitter',
          link: 'https://x.com/cool_patel18',
        },
      ],
    }
  },
  computed: {
    className() {
      return this.$route.path === '/contact' ? 'contact-page' : ''
    },
    iconsList() {
      return this.$route.path === '/contact'
        ? [
            { name: 'mail', link: 'mailto:tarunpatel1860@gmail.com' },
            ...this.list,
          ]
        : this.list
    },
  },
}
</script>
