<script setup>

const emit = defineEmits(['addTask'])

const parseTask = () => {
  let task = {};
  task.task_name = document.getElementById('task_name').value;
  task.task_deadline = document.getElementById('task_deadline').value;
  task.task_type = document.getElementById('task_type').value;
  task.task_description = document.getElementById('task_description').value;
  task.task_done = 0;
  emit('addTask', task)
}

</script>

<template>
  <div class="adder">
    <input id="task_name" placeholder="Task Name">
    <input id="task_deadline" placeholder="Task Deadline">
    <input id="task_type" placeholder="Task Type">
    <input id="task_description" placeholder="Task Description">
    <button v-on:click='parseTask'> Add task</button>
  </div>
</template>

<style scoped>

.adder {
  grid-gap: 5px;
  margin: 5px;
}

input {
  color: white;
  height: 30px;
  background-color: transparent;
  border: 1px solid var(--color-border);
  /*border-width: 1px;*/
  margin: 5px;
}

button {
  height: 30px;
  background-color: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

#task_description {
}

.adder {
  text-align: center;
}
  
</style>
