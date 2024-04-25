<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

const handleResult = (value) => {
  showDialog.value = false
  // Do something with `value`
  console.log('value', value)
}
</script>

<template>
  <ConfirmationDialog :show="showDialog1" @result="handleResult" />
</template>
