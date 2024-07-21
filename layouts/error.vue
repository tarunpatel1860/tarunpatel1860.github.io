<template>
  <div class="error">
    <h1>404</h1>
    <p>Are you lost?</p>
    <p>Cause this page doesnt exist!</p>
    <span class="mt-6">
      Go back to <NuxtLink class="color-primary" to="/">Home</NuxtLink>
    </span>
  </div>
</template>

<script>
import headMixin from '@/headMixin'

export default {
  mixins: [headMixin],
  props: {
    error: {
      type: Object,
      default: () => ({
        message: 'Not Found',
      }),
    },
  },
  data() {
    return {
      title: this.error.message,
    }
  },
}
</script>
