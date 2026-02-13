<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Jeux',
        items: [
            { label: 'Belote', icon: 'pi pi-fw pi-objects-column', to: '/pages/belote' }

            // Autre
            // { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
            // { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
            // { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
        ]
    },
    {
        label: 'Recettes',
        items: [
            {
                label: 'Classiques',
                icon: 'pi pi-fw pi-receipt',
                items: [
                    { label: 'Pâtes Carbonara', icon: 'pi pi-fw pi-caret-right', to: '/pages/PateCarbo' },
                    { label: 'Pâtes bolognaises', icon: 'pi pi-fw pi-caret-right', to: '/pages/PatesBolo' }
                ]
            },
            {
                label: 'Air Fryer',
                icon: 'pi pi-fw pi-receipt',
                items: [{ label: 'Recette', icon: 'pi pi-fw pi-objects-column', to: '/pages/recetteTemplate' }]
            },
            {
                label: 'Dessert',
                icon: 'pi pi-fw pi-shopping-bag',
                items: [
                    { label: 'Recette', icon: 'pi pi-fw pi-objects-column', to: '/pages/recetteTemplate' },
                    { label: 'Recette', icon: 'pi pi-fw pi-objects-column', to: '/pages/recetteTemplate' }
                ]
            }
        ]
    },
    {
        label: 'Dev',
        items: [
            {
                label: 'Java',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'Installation', icon: 'pi pi-fw pi-cog', to: '/pages/installation' },
                    { label: 'Basics', icon: 'pi pi-fw pi-book', to: '/pages/basics' },
                    { label: 'Boucles/conditions', icon: 'pi pi-fw pi-share-alt', to: '/pages/flux' },
                    { label: 'Méthodes & Tableaux', icon: 'pi pi-fw pi-cog', to: '/pages/methodes' },
                    { label: 'Programmation Orientée Objet', icon: 'pi pi-fw pi-users', to: '/pages/poo' },
                    { label: 'Outils avancés', icon: 'pi pi-fw pi-bolt', to: '/pages/tools' },
                    { label: 'Erreurs courantes', icon: 'pi pi-fw pi-shield', to: '/pages/errors' }
                ]
            }
        ]
    }

    // {
    //     label: 'Hierarchy',
    //     items: [
    //         {
    //             label: 'Submenu 1',
    //             icon: 'pi pi-fw pi-bookmark',
    //             items: [
    //                 {
    //                     label: 'Submenu 1.1',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [
    //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
    //                     ]
    //                 },
    //                 {
    //                     label: 'Submenu 1.2',
    //                     icon: 'pi pi-fw pi-bookmark',
    //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
    //                 }
    //             ]
    //         }
    //     ]
    // },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
