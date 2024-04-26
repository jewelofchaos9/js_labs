<script setup>
  import {ref} from 'vue'
  import Popup from './Popup.vue'

  const prop = defineProps(['task_name', 'task_deadline', 'task_type', 'task_id', 'task_description', 'task_done'])
  const emit = defineEmits(['deleteTask', 'taskRedone'])
  const taskDone = ref(prop.task_done);
  const taskDoneClass = "task_name_done";
  const taskClass = "task_name";

  const destruct = () => {
    emit("deleteTask", prop.task_id)
  }

  const redoTask = () => {
    taskDone.value ^= 1;
    emit("taskRedone", prop.task_id)
  }


</script>

<template>
  <div class="task">

    <div class="icon">
    </div>

    <div :class="taskDone ? taskDoneClass : taskClass">
      <span>{{prop.task_name}}</span>
    </div>

    <div class="task_deadline">
      <span>{{prop.task_deadline}}</span>
    </div>

    <div class="task_type">
      <span>{{prop.task_type}}</span>
    </div>

    <div class="task_description">
      <span>{{prop.task_description}}</span>
    </div>

    <div class="interact_buttons">
      <Popup @confirmed="(conf) => {if (conf) {redoTask()} }">
        <template v-slot:button>
          <button><img src="../assets/check-mark.png"></button>
        </template>
        <template v-slot:confirmation>
          <p> Are you sure you want to redo task? </p>
        </template>
      </Popup>
      <Popup @confirmed="(conf) => {if (conf) {destruct()}}">
        <template v-slot:button>
          <button><img src="../assets/trash-bin.png"></button>
        </template>
        <template v-slot:confirmation>
          <p> Are you sure you want to delete task? </p>
        </template>
      </Popup>
    </div>

  </div>

</template>

<style scoped>

button {
  background-color: transparent;
  border-width: 0px;
}

.task {
  text-align: center;
  display: flex;
  padding: 10px;
  grid-gap: 10px;
  border: 1px solid var(--color-border);
  word-wrap: break-word;
  border-bottom-width: 0px;
}

.task:last-of-type {
  border-bottom-width: 1px;
}


.task_name {
  flex: 1;
  color:red;
}

.task_name_done {
  flex: 1;
  color:green;

}

.task_deadline {
  flex: 1;
}

.task_type {
  flex: 1;
}

.task_description {
  flex: 5;
}

.interact_buttons {
  flex: 1;
}


</style>
