<template>
  <div class="columns">
    <div class="column is-three-quarters">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ article.title }}
          </p>
          <p class="card-header-icon">
            <span class="tag is-info">
              {{ article.subject }}
            </span>
          </p>
        </header>
        <div
          class="card-content"
          v-html="article.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KbArticle',
  computed: {
    article () {
      return this.$store.getters.article(this.$route.params.id)
    }
  }  
}
</script>
