<script setup>
  import { ref } from 'vue'

  const count = ref(0)
  const prop = defineProps(['amount', 'clicker-index'])
  const emit = defineEmits(['button-clicked'])

  const onClick = () => {
    count.value += prop.amount
    emit('button-clicked', count.value)
  }
</script>

<template> 
  <div id="app">
    <div>Clicked {{count}} times </div>
    <button v-on:click="onClick">
      <slot/>
    </button>
  </div>
</template>

