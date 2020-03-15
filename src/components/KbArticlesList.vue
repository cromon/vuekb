<template>
  <div>
    <h4 class="title is-4">Articles</h4>
    <div v-if="articles.length > 1">
      <div
        v-for="(chunk, index) in chunkedArticlesBySubject"
        :key="index + 1"
        class="columns"
      >
        <div
          v-for="(articleGroup, index) in chunk"
          :key="index + 1"
          class="column"
        >
          <!-- Column 1 -->
          <h5 class="title is-5">
            {{ articleGroup[0] }}
          </h5>
          <div v-for="(article, index) in Object.values(articleGroup[1])" :key="index+1">
            <router-link :to="{name: 'KbArticle', params: {id: article.id}}">
              <i class="fas fa-book"></i> <span>{{ article.title }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h5 class="info has-text-danger">
        No Articles Yet
      </h5>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'KbArticlesList',
  props: {
    columns: {
      type: Number,
      default: 2
    }
  },
  computed: {
    articles () {
      if (this.$route.query && this.$route.query.subject) {
        return this.$store.state.articles.filter(article => article.subject === this.$route.query.subject)
      } else {
        return this.$store.state.articles
      }
    },
    articlesBySubject () {
      return _.toPairs(_.groupBy(this.articles, 'subject'))
    },
    chunkedArticlesBySubject () {
      return _.chunk(this.articlesBySubject, this.columns)
    }
  }
}
</script>
