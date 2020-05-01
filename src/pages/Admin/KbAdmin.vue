<template>
  <div>
    Admin
  </div>
</template>

<script>
export default {
  name: 'KbAdmin',
  computed: {
    articleCount () {
      return this.$store.state.articles.length
    }
  }
}
</script>
