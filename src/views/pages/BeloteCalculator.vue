<template>
    <div class="card dark:bg-gray-700 col-span-12 xl:col-span-6 flex flex-col gap-6 p-6 rounded-xl shadow-md">
        <h1 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Compteur de points - Belote</h1>

        <!-- Champs pour modifier le nom des équipes -->
        <div class="flex gap-4 justify-center mb-4">
            <input type="text" v-model="teamAName" placeholder="Nom Équipe A" class="border rounded-lg p-2 w-40 text-center dark:bg-gray-700" />
            <input type="text" v-model="teamBName" placeholder="Nom Équipe B" class="border rounded-lg p-2 w-40 text-center dark:bg-gray-700" />
        </div>

        <!-- SCORES -->
        <div class="flex flex-col md:flex-row gap-10 justify-center">
            <!-- ÉQUIPE A -->
            <div class="flex flex-col gap-6 text-center items-center">
                <div class="flex-1 card p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <h2 class="text-xl font-semibold">{{ teamAName }}</h2>
                    <div class="text-4xl font-bold">{{ totalA }}</div>
                </div>

                <div class="flex flex-col items-center gap-2">
                    <input type="number" v-model.number="roundA" min="0" max="162" class="border rounded-lg p-2 dark:bg-gray-700 w-28 text-center" />
                    <div class="flex gap-2">
                        <button @click="capot('A')" class="quick">Capot</button>
                        <button @click="contratPerdu('A')" class="quick red">Contrat perdu</button>
                    </div>
                </div>
            </div>

            <!-- ÉQUIPE B -->
            <div class="flex flex-col gap-6 text-center items-center">
                <div class="flex-1 card p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <h2 class="text-xl font-semibold">{{ teamBName }}</h2>
                    <div class="text-4xl font-bold">{{ totalB }}</div>
                </div>

                <div class="flex flex-col items-center gap-2">
                    <input type="number" v-model.number="roundB" min="0" max="162" class="border rounded-lg p-2 dark:bg-gray-700 w-28 text-center" />
                    <div class="flex gap-2">
                        <button @click="capot('B')" class="quick">Capot</button>
                        <button @click="contratPerdu('B')" class="quick red">Contrat perdu</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- ACTIONS -->
        <div class="flex gap-4 justify-center">
            <button @click="addRound" class="main">Ajouter la manche</button>
            <button @click="reset" class="danger">Reset</button>
        </div>

        <!-- HISTORIQUE -->
        <div v-if="rounds.length" class="mt-6">
            <h2 class="text-xl font-semibold mb-3 text-center">Historique</h2>

            <table class="w-full text-center border-collapse">
                <thead>
                    <tr class="bg-gray-200 dark:bg-gray-600">
                        <th>#</th>
                        <th>{{ teamAName }}</th>
                        <th>{{ teamBName }}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(r, i) in rounds" :key="i" class="border-b">
                        <td>{{ i + 1 }}</td>

                        <td>
                            <input type="number" v-model.number="r.a" @input="normalizeRound(i, 'A')" class="w-20 text-center border rounded" />
                        </td>

                        <td>
                            <input type="number" v-model.number="r.b" @input="normalizeRound(i, 'B')" class="w-20 text-center border rounded" />
                        </td>

                        <td>
                            <button @click="deleteRound(i)" class="danger px-2 py-1">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const TOTAL_POINTS = 162;

// noms dynamiques
const teamAName = ref('Équipe A');
const teamBName = ref('Équipe B');

const roundA = ref(0);
const roundB = ref(0);
const rounds = ref([]);

// Totaux
const totalA = computed(() => rounds.value.reduce((sum, r) => sum + r.a, 0));
const totalB = computed(() => rounds.value.reduce((sum, r) => sum + r.b, 0));

function normalize(a, b) {
    a = Math.max(0, Math.min(TOTAL_POINTS, a));
    b = Math.max(0, Math.min(TOTAL_POINTS, b));

    if (a > 0 && b === 0) b = TOTAL_POINTS - a;
    else if (b > 0 && a === 0) a = TOTAL_POINTS - b;
    else if (a + b !== TOTAL_POINTS) b = TOTAL_POINTS - a;

    return { a, b };
}

function addRound() {
    let a = Number(roundA.value) || 0;
    let b = Number(roundB.value) || 0;
    if (a === 0 && b === 0) return;

    const r = normalize(a, b);
    rounds.value.push(r);

    roundA.value = 0;
    roundB.value = 0;
}

function normalizeRound(index, edited) {
    const r = rounds.value[index];

    let a = Number(r.a) || 0;
    let b = Number(r.b) || 0;

    a = Math.max(0, Math.min(TOTAL_POINTS, a));
    b = Math.max(0, Math.min(TOTAL_POINTS, b));

    if (edited === 'A') {
        r.a = a;
        r.b = TOTAL_POINTS - a;
    } else if (edited === 'B') {
        r.b = b;
        r.a = TOTAL_POINTS - b;
    }
}

function deleteRound(index) {
    rounds.value.splice(index, 1);
}

function capot(team) {
    if (team === 'A') {
        roundA.value = TOTAL_POINTS;
        roundB.value = 0;
    } else {
        roundB.value = TOTAL_POINTS;
        roundA.value = 0;
    }
}

function contratPerdu(team) {
    if (team === 'A') {
        roundA.value = 0;
        roundB.value = TOTAL_POINTS;
    } else {
        roundB.value = 0;
        roundA.value = TOTAL_POINTS;
    }
}

function reset() {
    rounds.value = [];
    roundA.value = 0;
    roundB.value = 0;
}
</script>

<style scoped>
.quick {
    background: #3b82f6;
    color: white;
    padding: 4px 10px;
    border-radius: 8px;
}
.quick.red {
    background: #f97316;
}
.main {
    background: #22c55e;
    color: white;
    padding: 8px 14px;
    border-radius: 8px;
}
.danger {
    background: #ef4444;
    color: white;
    padding: 6px 10px;
    border-radius: 8px;
}
</style>
