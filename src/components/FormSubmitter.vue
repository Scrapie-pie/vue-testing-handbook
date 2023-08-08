<template>
  <div>
    <form @submit.prevent="handleSubmitAsync">
      <input v-model="username" data-username>
      <input type="submit">
    </form>

    <!-- ... -->
    <div
      class="message"
      v-if="submitted"
    >
      Спасибо за ваше сообщение, {{ username }}.
    </div>
  </div>
</template>

<script>
export default {
  name: "FormSubmitter",

  data() {
    return {
      username: '',
      submitted: false
    }
  },

  methods: {
    handleSubmitAsync() {
      return this.$http.get("/api/v1/register", { username: this.username })
        .then(() => {
          this.submitted = true
        })
        .catch((e) => {
          throw Error("Что-то пошло не так", e)
        })
    }
  }
}
</script>