<template>
  <div class="columns">
    <div class="column is-three-quarters">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ faq.question }}
          </p>
        </header>
        <div
          class="card-content"
          v-html="faq.answer"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KbFaq',
  computed: {
    faq () {
      return this.$store.getters.faq(this.$route.params.id)
    }
  }  
}
</script>
