<script setup>
import {ref} from 'vue'
import axios from 'axios';
import Task from './Task.vue'
import TaskAdder from './TaskAdder.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import Popup from './Popup.vue'
</script>

<script>
const loadTasks = () => {
  let tasks = null;
  let ans = axios.get(import.meta.env.VITE_API_HOST + '/get_tasks').then(response => {return response.data})
  return ans
}

let serverTasks = await loadTasks();
const tasks = ref(serverTasks.tasks)
const lastId = ref(serverTasks.max_id)


const destruct = async (id) => {
  let ans = await fetch(import.meta.env.VITE_API_HOST + '/delete_task', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({"task_id": id})
  })
  ans = await ans.json()
  console.log(ans)

  for(let i = 0; i < tasks.value.length; i++) {
    if (tasks.value[i].task_id === id) {
      tasks.value = tasks.value.filter(item => item.task_id !== id)
      return
    }
  }
}

const appendTask = async (task) => {
  task.task_id = lastId.value;
  let ans = await fetch(import.meta.env.VITE_API_HOST + '/add_task', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(task)
  })
  ans = await ans.json()
  console.log(ans)

  lastId.value += 1;
  tasks.value.push(task);
}

const redoTask = async (id) => {
  let ans = await fetch(import.meta.env.VITE_API_HOST + '/redo_task', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({"task_id": id})
  })
  ans = await ans.json()
  console.log(ans)
}

</script>

<template>
  <div class="tasks">
    <TaskAdder @addTask="(task) => appendTask(task)"/>
    <Task :task_name="task.task_name" 
      :task_deadline="task.task_deadline" 
      :task_type="task.task_type"
      :task_id="task.task_id"
      :task_description="task.task_description"
      :task_done="task.task_done"
      @deleteTask="(id) => destruct(id)"
      @taskRedone="(id) => redoTask(id)"
      v-for="task in tasks"
    >
        <template #icon>
          <CommunityIcon />
        </template>
    </Task>
  </div>

</template>

<style scoped>

.tasks-container:last-of-type {
  border-bottom-width: 1px;
}

</style>
