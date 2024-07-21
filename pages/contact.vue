<template>
  <div
    v-touch:swipe="changeRouteOnSwipe"
    class="contact"
    @mousewheel="goNextThrottle"
  >
    <form class="contact__form" autocomplete="off" @submit.prevent="sendEmail">
      <div class="contact__form__input mb-6">
        <input
          v-model="contactName"
          required
          type="text"
          placeholder="Your Name"
          name="from_name"
          autocomplete="false"
        />
      </div>
      <div class="contact__form__input mb-6">
        <input
          v-model="contactEmail"
          required
          type="email"
          name="reply_to"
          placeholder="Your Email"
        />
      </div>
      <div class="contact__form__input mb-6">
        <textarea
          v-model="contactMessage"
          required
          rows="8"
          name="message"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div class="contact__form__actions d-flex">
        <button
          id="submit"
          class="border-primary px-9 py-1 rounded fw-400 mr-3"
        >
          <span v-if="sending">Sending</span>
          <span v-else-if="errorOccurred">Sorry! Errors!</span>
          <span v-else-if="messageSent">
            <i class="icon-check color-primary"></i>
            Message Sent
          </span>
          <span v-else>Send</span>
        </button>
        <!--        <button-->
        <!--          type="button"-->
        <!--          class="border-primary px-9 py-1 rounded fw-400 d-flex-center"-->
        <!--          @click="sendWhatsappMessage"-->
        <!--        >-->
        <!--          <i class="icon-whatsapp mr-2"></i> Whatsapp-->
        <!--        </button>-->
      </div>
    </form>
    <div class="contact__content">
      <h1 class="color-primary">Let's get in touch!</h1>
      <h3 class="px-9 mt-3 fw-400">
        You can fill the form, hit send. Also, you can reach me out on the below
        social links.
      </h3>
      <div ref="social-container"></div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

import changeRouteOnScrollMixin from '~/changeRouteOnScrollMixin'
import headMixin from '~/headMixin'

export default {
  mixins: [changeRouteOnScrollMixin, headMixin],
  data() {
    return {
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      sending: false,
      messageSent: false,
      errorOccurred: false,
      title: 'Contact Me - tarunpatel1860',
    }
  },
  watch: {
    messageSent(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.messageSent = false
        }, 2000)
      }
    },
  },
  mounted() {
    this.animateSocialIcons()
  },
  methods: {
    sendEmail(evt) {
      this.sending = true
      emailjs
        .sendForm(
          'service_7k8f36d',
          'template_dzp5hjl',
          evt.target,
          'user_JQ0ez73KKRsdihwaBiUYk'
        )
        .then(
          (result) => {
            this.sending = false
            this.messageSent = true
          },
          () => {
            this.sending = false
            this.errorOccurred = true
          }
        )
    },
    prepareMessage() {
      let message = 'Hi Tarun,\n'
      if (this.contactName.length) message += `I am ${this.contactName},\n\n`
      if (this.contactMessage) message += this.contactMessage + '\n'
      if (this.contactEmail)
        message += `You can contact me on ${this.contactEmail}`
      return encodeURI(message)
    },
    sendWhatsappMessage() {
      const message = this.prepareMessage()
      window.open(
        `https://wa.me/{MobileNumber}?text=${message}`,
        '_blank',
        'noopener noreferrer'
      )
    },
    animateSocialIcons() {
      if (window.innerWidth < 770) return
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const containerDiv = this.$refs['social-container']
      if (!containerDiv) {
        return
      }
      document.documentElement.style.setProperty(
        '--social-right',
        windowWidth - containerDiv.offsetLeft + 'px'
      )
      document.documentElement.style.setProperty(
        '--social-bottom',
        windowHeight - containerDiv.offsetTop + 'px'
      )

      document.documentElement.style.setProperty(
        '--social-transform',
        'translate(50%, calc(50% + 5rem))'
      )
    },
  },
}
</script>
