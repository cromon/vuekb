<template>
  <div>
    <kb-header />
    <kb-search />
    <div class="columns">
      <div class="column is-one-fifth">
        <kb-side-menu />
      </div>
      <div class="column">
        <kb-breadcrumbs />
        <section class="section">
          <router-view />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import KbBreadcrumbs from '@/components/KbBreadcrumbs'
import KbHeader from '@/components/KbHeader'
import KbSearch from '@/components/KbSearch'
import KbSideMenu from '@/components/KbSideMenu'

export default {
  name: 'App',
  components: {
    KbBreadcrumbs,
    KbHeader,
    KbSearch,
    KbSideMenu
  },
  created () {
    if (this.config.datastore === 'firebase') {
      this.$store.dispatch('bindArticles')
      this.$store.dispatch('bindFaqs')
    }
  }
}
</script>
