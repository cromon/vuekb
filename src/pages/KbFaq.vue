<template>
  <div>
    {{ faq }}
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
