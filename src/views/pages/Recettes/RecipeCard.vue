<template>
    <div class="card h-full p-6 bg-white rounded-xl shadow-md flex flex-col gap-6">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <div>
                <span class="block text-gray-500 dark:text-gray-400 font-medium mb-1">Recette</span>
                <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {{ recipe.title }}
                </h1>
            </div>

            <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-full w-10 h-10">
                <i class="pi pi-receipt text-orange-500 text-xl"></i>
            </div>
        </div>

        <!-- Image + Ingrédients -->
        <div class="flex flex-col lg:flex-row gap-4">
            <!-- Image + Infos -->
            <div class="w-full lg:w-1/2 flex-1">
                <div class="card h-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col justify-center">
                    <img :src="recipe.image" alt="image recette" class="rounded-lg object-cover w-full h-64" />

                    <div class="flex gap-6 text-sm text-gray-600 dark:text-gray-300 mt-3">
                        <span>⏱ {{ recipe.time }}</span>
                        <span>👥 {{ recipe.servings }} personnes</span>
                        <span>🔥 {{ recipe.difficulty }}</span>
                    </div>
                </div>
            </div>

            <!-- Ingrédients -->
            <div class="w-full lg:w-1/2 flex-1">
                <div class="card h-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col">
                    <div class="flex justify-between mb-4">
                        <div class="text-gray-900 dark:text-gray-100 font-medium text-xl">Ingrédients</div>
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full w-10 h-10">
                            <i class="pi pi-book text-blue-500 text-xl"></i>
                        </div>
                    </div>

                    <ul class="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed flex-1 list-disc list-inside">
                        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                            {{ ingredient }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Étapes -->
        <div class="w-full">
            <div class="card h-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col">
                <div class="flex justify-between mb-4">
                    <div class="text-gray-900 dark:text-gray-100 font-medium text-xl">Préparation</div>
                    <div class="flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full w-10 h-10">
                        <i class="pi pi-step-forward text-green-500 text-xl"></i>
                    </div>
                </div>

                <ol class="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed flex-1 list-decimal list-inside">
                    <li v-for="(step, index) in recipe.steps" :key="index">
                        {{ step }}
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    recipe: {
        type: Object,
        required: true
    }
});
</script>
