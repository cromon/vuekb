<template>
  <b-navbar type="is-info">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        Knowledgebase
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ name: 'KbArticles' }">
        Articles
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'KbFaqs' }">
        FAQs
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <!-- <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div> -->
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'KbHeader'
}
</script>
