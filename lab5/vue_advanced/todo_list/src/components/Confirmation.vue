<script setup>
import { ref } from 'vue'
import ConfirmationDialog from './ConfirmationDialog.vue'

const showDialog = ref(false)

const handleResult = (value) => {
  showDialog.value = false
  // Do something with `value`
  console.log('value', value)
}
</script>

<template>
  <ConfirmationDialog :show="showDialog" @result="handleResult">
    <template #title="{ emitResult }">
      <div class="flex justify-between">
        <div class="text-xl font-semibold tracking-wide">
          Cool confirmation
        </div>
        <CloseIcon
          class="w-6 cursor-pointer text-pink-600"
          @click="emitResult(false)"
        />
      </div>
    </template>

    <template #body>
      <div class="py-4 text-sm">Are you super duper sure about THIS?</div>
    </template>
  </ConfirmationDialog>
</template>
