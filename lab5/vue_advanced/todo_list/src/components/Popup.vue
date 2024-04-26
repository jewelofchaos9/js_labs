<script setup>
import { ref } from 'vue'
const prop = defineProps(['open'])
const open = ref(false);
const emit = defineEmits(['confirmed'])

const confirm = () => {
  open.value = false;
  emit('confirmed', 1)
}

const discomfirm = () => {
  open.value = false;
  emit('confirmed', 0)
}
</script>

<template>
  <button @click="open = true"> <slot name='button'/> </button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <slot name="confirmation"/>
      <button @click="discomfirm()">Close</button>
      <button @click="confirm()">Confirm</button>
    </div>
  </Teleport>

</template>

<style scoped> 
.modal {
  text-align: center;
  align-items: center;
  position: absolute;
  left: 25%;
  top: 25%;
  width: 50%;
  height: 50%;
  background-color: var(--color-background-mute);
}

button {
  height: 30px;
  background-color: transparent;
  border: 0px;
  color: var(--color-text);
}
</style>
