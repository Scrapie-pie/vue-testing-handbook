<template>
  <div>
    <div class="message">{{ uppercasedMessage }}</div>
    <div class="count">
      Счётчик: {{ state.count }}
    </div>
    <button @click="increment">Увеличить</button>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'CompositionApi',

  props: {
    message: {
      type: String
    }
  },

  setup(props) {
    const state = reactive({
      count: 0
    })

    const increment = () => {
      state.count += 1
    }

    const uppercasedMessage = computed(() => props.message.toUpperCase())

    return {
      state,
      increment,
      uppercasedMessage
    }
  }
}
</script>