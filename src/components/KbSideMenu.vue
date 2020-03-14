<template>
  <b-menu>
    <b-menu-list label="Subjects">
      <b-menu-item
        v-for="(subject, index) in subjects"
        :key="index + 1"
        :to="{name: 'KbArticles', query: {subject: subject}}"
        :label="subject"
        tag="router-link"
        icon="information-outline"
        :active="$route.query.subject === subject"
      />
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: 'KbSideMenu',
  computed: {
    subjects () {
      return this.$store.getters.subjects
    }
  }
}
</script>

<style lang="css">
.menu {
  padding: 10%;
}
.menu-list {
  font-size: 0.8rem;
}
</style>