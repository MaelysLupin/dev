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
                    path: '/pages/basics',
                    name: 'Basics',
                    component: () => import('@/views/pages/JavaBasic.vue')
                },
                {
                    path: '/pages/flux',
                    name: 'Boucles/conditions',
                    component: () => import('@/views/pages/JavaFlux.vue')
                },
                {
                    path: '/pages/methodes',
                    name: 'Méthodes & Tableaux',
                    component: () => import('@/views/pages/JavaMethods.vue')
                },
                {
                    path: '/pages/poo',
                    name: 'Programmation Orientée Objet',
                    component: () => import('@/views/pages/JavaPoo.vue')
                },
                {
                    path: '/pages/tools',
                    name: 'Outils avancés',
                    component: () => import('@/views/pages/JavaTools.vue')
                }
            ]
        }
    ]
});

export default router;
