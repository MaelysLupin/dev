<template>
    <div class="flex flex-col lg:flex-row gap-4">
        <!-- Card Date -->
        <div class="w-full lg:w-1/2 flex-1">
            <div class="card h-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col justify-center">
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-primary font-medium mb-2">{{ weekday }}</span>
                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">{{ day }} {{ month }} {{ year }}</div>
                    </div>
                    <div class="flex items-center justify-center bg-primary-100 dark:bg-primary-400/10 rounded-full" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-calendar text-primary-500 !text-xl"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card Fun Fact -->
        <div class="w-full lg:w-1/2 flex-1">
            <div class="card h-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col justify-center">
                <!-- Header -->
                <div class="flex justify-between mb-4">
                    <div>
                        <span class="block text-orange-500 dark:text-orange-400 font-medium mb-2">Fun Fact</span>
                        <div class="mt-2 text-center text-gray-700 dark:text-gray-300 italic flex-1 flex items-center justify-center">
                            <p v-if="loading">Chargement...</p>
                            <p v-else>{{ funFact }}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full" style="width: 2.5rem; height: 2.5rem">
                        <i class="pi pi-lightbulb text-orange-500 !text-xl"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const weekday = ref('');
const day = ref('');
const month = ref('');
const year = ref('');
const funFact = ref('');
const loading = ref(true);

const updateDateTime = () => {
    const now = new Date();
    weekday.value = now.toLocaleDateString('fr-FR', { weekday: 'long' });
    day.value = now.getDate();
    month.value = now.toLocaleDateString('fr-FR', { month: 'long' });
    year.value = now.getFullYear();
};

const fetchFunFact = async () => {
    try {
        loading.value = true;
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=fr');
        const data = await response.json();
        funFact.value = data.text;
    } catch (error) {
        funFact.value = 'Impossible de récupérer un fun fact.';
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    updateDateTime();
    fetchFunFact();
    const now = new Date();
    const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;
    setTimeout(() => fetchFunFact(), millisTillMidnight);
});
</script>
