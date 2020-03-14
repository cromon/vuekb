<template>
  <div>
    <div v-if="config.articleContent && !config.faqContent">
      <kb-articles-list />
    </div>
    <div v-if="!config.articleContent && config.faqContent">
      <kb-faqs-list />
    </div>
    <div v-if="config.articleContent && config.faqContent">
      <div class="columns">
        <div class="column">
          <kb-articles-list :columns=1 />
        </div>
        <div class="column">
          <kb-faqs-list :columns=1 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KbArticlesList from '@/components/KbArticlesList'
import KbFaqsList from '@/components/KbFaqsList'

export default {
  name: 'KbHome',
  components: {
    KbArticlesList,
    KbFaqsList
  }
}
</script>
