<template>
    <div class="card dark:bg-gray-700 col-span-12 xl:col-span-6 flex flex-col gap-6">
        <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Compteur de points - Belote</h1>

        <!-- SCORES -->
        <div class="flex flex-col md:flex-row gap-6 text-center">
            <div class="flex-1 card p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h2 class="text-xl font-semibold">Équipe A</h2>
                <div class="text-4xl font-bold">{{ totalA }}</div>
            </div>
            <!-- SAISIE MANCHE -->
            <!-- INPUT A + boutons centrés -->
            <input type="number" v-model.number="roundA" class="border rounded-lg p-2 dark:bg-gray-700 mx-auto" />
            <div class="flex gap-2 mt-2 justify-center">
                <button @click="capot('A')" class="quick">Capot</button>
                <button @click="contratPerdu('A')" class="quick red">Contrat perdu</button>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-6 text-center">
            <div class="flex-1 card p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <h2 class="text-xl font-semibold">Équipe B</h2>
                <div class="text-4xl font-bold">{{ totalB }}</div>
            </div>
            <!-- SAISIE MANCHE -->
            <!-- INPUT B + boutons centrés -->
            <input type="number" v-model.number="roundB" class="border rounded-lg p-2 dark:bg-gray-700 mx-auto" />
            <div class="flex gap-2 mt-2 justify-center">
                <button @click="capot('B')" class="quick">Capot</button>
                <button @click="contratPerdu('B')" class="quick red">Contrat perdu</button>
            </div>
        </div>

        <!-- ACTIONS -->
        <div class="flex gap-4 justify-center">
            <button @click="addRound" class="main">Ajouter la manche</button>
            <button @click="reset" class="danger">Reset</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const totalA = ref(0);
const totalB = ref(0);

const roundA = ref(0);
const roundB = ref(0);

function addRound() {
    totalA.value += roundA.value || 0;
    totalB.value += roundB.value || 0;
    roundA.value = 0;
    roundB.value = 0;
}

function capot(team) {
    if (team === 'A') {
        roundA.value = 162;
        roundB.value = 0;
    } else {
        roundB.value = 162;
        roundA.value = 0;
    }
}

function contratPerdu(team) {
    if (team === 'A') {
        roundA.value = 0;
        roundB.value = 162;
    } else {
        roundB.value = 0;
        roundA.value = 162;
    }
}

function reset() {
    totalA.value = 0;
    totalB.value = 0;
    roundA.value = 0;
    roundB.value = 0;
}
</script>

<style scoped>
.quick {
    @apply bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition;
}
.quick.red {
    @apply bg-orange-500 hover:bg-orange-600;
}
.main {
    @apply bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition;
}
.danger {
    @apply bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition;
}
</style>
