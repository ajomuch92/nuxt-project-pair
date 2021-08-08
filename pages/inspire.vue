<template>
  <section class="section">
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/ajomuch92">
        Aarón Montes
      </a>
    </h3>
    <p>{{ reversedMessage }}</p>
  </section>
</template>

<script>
export default {
  name: 'Inspire',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
