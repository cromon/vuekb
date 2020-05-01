<template>
  <form>
    <p class="control">
      <label
        for="subject"
        class="label"
      >
        Subject
      </label>
      <input
        v-model="article.subject"
        name="subject"
        type="text"
        class="input"
        placeholder="Subject"
      >
    </p>
  </form>
</template>

<script>
export default {
  name: 'KbArticleForm',
  computed: {
    article () {
      return {}
    }
  }
}
</script>
