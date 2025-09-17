<template>
    <div class="grid gap-8">
        <div class="col-span-12 xl:col-span-6 flex flex-col gap-4">
            <ToCome />
            <div class="w-full">
                <div class="card h-full p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col">
                    <!-- Header -->
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block text-gray-500 dark:text-gray-400 font-medium mb-2">Bienvenue</span>
                            <div class="text-gray-900 dark:text-gray-100 font-medium text-xl">Cheatsheets</div>
                        </div>
                        <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-full" style="width: 2.5rem; height: 2.5rem">
                            <i class="pi pi-book text-blue-500 !text-xl"></i>
                        </div>
                    </div>

                    <!-- Contenu de présentation -->
                    <div class="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                        <p>Ce site regroupe toutes les cheatsheets :</p>
                        <p>- Java essentielles : bases, contrôle de flux, méthodes, objets et outils avancés.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ToCome from '@/components/dashboard/ToCome.vue';
</script>
