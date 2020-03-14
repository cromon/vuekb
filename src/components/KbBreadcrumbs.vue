<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li>
        <router-link :to="{name: 'Home'}">
          Home
        </router-link>
      </li>
      <li v-if="$route.path.match(/articles/)">
        <router-link :to="{name: 'KbArticles'}">
          Articles
        </router-link>
      </li>
      <li v-if="$route.path.match(/articles/) && $route.params.id">
        <router-link :to="{name: 'KbArticle', params: {id: $route.params.id}}">
          {{ $route.params.id }}
        </router-link>
      </li>
      <li v-if="$route.path.match(/faqs/)">
        <router-link :to="{name: 'KbFaqs'}">
          FAQs
        </router-link>
      </li>
      <li v-if="$route.path.match(/faqs/) && $route.params.id">
        <router-link :to="{name: 'KbFaq', params: {id: $route.params.id}}">
          {{ $route.params.id }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'KbBreadcrumbs'
}
</script>
