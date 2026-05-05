<template>
    <RecipeCard :recipe="recipe" />
</template>

<script setup>
import RecipeCard from '@/views/pages/Recettes/RecipeCard.vue';

const recipe = {
    title: 'Vinaigrette Balsamique',
    image: 'https://images.prismic.io/nahrin/Z6tJtZbqstJ9-ejN_Italienische-Salatsauce-Dressing.jpg?auto=format,compress',
    time: '5 min',
    servings: '500ml',
    difficulty: 'Facile',
    ingredients: ['2 cuillère à soupe de moutarde', '125ml vinaigre balsamique', '275ml huile de tournesol', 'Sel'],
    steps: ['Mettre dans un shaker la moutarde, le vinaigre et l’huile', 'Ajouter environs 10 tours de sel', 'Mélanger']
};
</script>
