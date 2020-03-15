<template>
  <div>
    <h4 class="title is-4">FAQs</h4>
    <div v-if="faqs.length > 1">
      <p
        v-for="(faq, index) in faqs"
        :key="index + 1"
      >
        <router-link :to="{name: 'KbFaq', params: {id: faq.id}}">
          <i class="fas fa-question-circle"></i> <span>{{ faq.question }}</span>
        </router-link>
      </p>
    </div>
    <div v-else>
      <h5 class="info has-text-danger">
        No FAQs Yet
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KbFaqsList',
  props: {
    columns: {
      type: Number,
      default: 2
    }
  },
  computed: {
    faqs () {
      return this.$store.state.faqs
    },
  }
}
</script>
