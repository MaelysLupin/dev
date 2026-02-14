import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/installation',
                    name: 'Installation',
                    component: () => import('@/views/pages/Java/JavaInstall.vue')
                },
                {
                    path: '/pages/basics',
                    name: 'Basics',
                    component: () => import('@/views/pages/Java/JavaBasic.vue')
                },
                {
                    path: '/pages/flux',
                    name: 'Boucles/conditions',
                    component: () => import('@/views/pages/Java/JavaFlux.vue')
                },
                {
                    path: '/pages/methodes',
                    name: 'Méthodes & Tableaux',
                    component: () => import('@/views/pages/Java/JavaMethods.vue')
                },
                {
                    path: '/pages/poo',
                    name: 'Programmation Orientée Objet',
                    component: () => import('@/views/pages/Java/JavaPoo.vue')
                },
                {
                    path: '/pages/tools',
                    name: 'Outils avancés',
                    component: () => import('@/views/pages/Java/JavaTools.vue')
                },
                {
                    path: '/pages/belote',
                    name: 'Belote',
                    component: () => import('@/views/pages/BeloteCalculator.vue')
                },
                {
                    path: '/pages/pizzaWrap',
                    name: 'Pizza Wrap',
                    component: () => import('@/views/pages/Recettes/AirFryer/PizzaWrap.vue')
                },
                {
                    path: '/pages/PateCarbo',
                    name: 'Pates Carbonara',
                    component: () => import('@/views/pages/Recettes/Classique/PateCarbo.vue')
                },
                {
                    path: '/pages/PatesBolo',
                    name: 'Pâtes Carbonara',
                    component: () => import('@/views/pages/Recettes/Classique/PatesBolo.vue')
                },
                {
                    path: '/pages/errors',
                    name: 'Erreurs courantes',
                    component: () => import('@/views/pages/Java/JavaErrors.vue')
                }
            ]
        }
    ]
});

export default router;
