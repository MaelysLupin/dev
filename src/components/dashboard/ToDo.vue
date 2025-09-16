<template>
    <div class="card">
        <h2 class="text-2xl font-bold mb-4">To-Do List</h2>

        <!-- Ajouter une tâche -->
        <div class="flex mb-4">
            <InputText v-model="newTask" placeholder="Nouvelle tâche" class="flex-grow mr-2" />
            <Button label="Ajouter" icon="pi pi-plus" @click="addTask" />
        </div>

        <!-- Option masquer -->
        <div class="flex items-center mb-4">
            <Checkbox v-model="hideCompleted" :binary="true" inputId="hideDone" />
            <label for="hideDone" class="ml-2">Masquer les tâches terminées</label>
        </div>

        <!-- Liste des tâches -->
        <ul>
            <li v-for="(task, index) in filteredTasks" :key="task.id"
                class="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
                <div class="flex items-center space-x-2">
                    <Checkbox v-model="task.done" :binary="true" @change="saveTasks" />
                    <span :class="{ 'line-through text-gray-500': task.done }">{{ task.label }}</span>
                </div>
                <Button icon="pi pi-trash" class="p-button-text p-button-danger" @click="removeTask(index)" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'

const tasks = ref([])
const newTask = ref('')
const hideCompleted = ref(false)

// Tri automatique : tâches non terminées en premier
const filteredTasks = computed(() => {
    const sorted = [...tasks.value].sort((a, b) => {
        if (a.done === b.done) return 0
        return a.done ? 1 : -1 // done=true => à la fin
    })
    return hideCompleted.value ? sorted.filter(task => !task.done) : sorted
})

function loadTasks() {
    axios.get('http://localhost:3001/todos')
        .then(response => {
            tasks.value = response.data
        })
        .catch(() => {
            tasks.value = []
        })
}

function saveTasks() {
    axios.post('http://localhost:3001/todos', tasks.value)
        .catch(err => console.error('Erreur de sauvegarde :', err))
}

function addTask() {
    if (!newTask.value.trim()) return

    tasks.value.push({
        id: Date.now(),
        label: newTask.value.trim(),
        done: false
    })

    newTask.value = ''
    saveTasks()
}

function removeTask(index) {
    tasks.value.splice(index, 1)
    saveTasks()
}

onMounted(loadTasks)
</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>
