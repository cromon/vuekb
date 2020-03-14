<template>
  <div class="section">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <label
          for="search"
          class="label has-text-centered"
        >
          Search Knowledgebase
        </label>
        <input
          type="text"
          class="input"
          placeholder="Search..."
          @input="search"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KbSearch',
  methods: {
    search (event) {
      console.log(event.target.value)
    }
  }
}
</script>
