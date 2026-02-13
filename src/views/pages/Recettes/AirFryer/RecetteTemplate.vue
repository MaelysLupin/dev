<template>
    <RecipeCard :recipe="recipe" />
</template>

<script setup>
import RecipeCard from '@/views/pages/Recettes/RecipeCard.vue';

const recipe = {
    title: 'Pâtes Carbonara',
    image: 'https://gourmandiz.dhnet.be/wp-content/uploads/2018/03/carbonara-e1521461363147.jpg',
    time: '20 min',
    servings: 2,
    difficulty: 'Facile',
    ingredients: ['200g de pâtes', '100g de lardons', '2 jaunes d’œufs', '50g de parmesan', 'Poivre'],
    steps: ['Faire cuire les pâtes', 'Faire revenir les lardons', 'Mélanger jaunes + parmesan', 'Assembler le tout hors du feu', 'Poivrer et servir']
};
</script>
