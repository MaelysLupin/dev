<script setup>
import BestSellingWidget from '@/components/dashboard/BestSellingWidget.vue';
import NotificationsWidget from '@/components/dashboard/NotificationsWidget.vue';
import RecentSalesWidget from '@/components/dashboard/RecentSalesWidget.vue';
import RevenueStreamWidget from '@/components/dashboard/RevenueStreamWidget.vue';
import StatsWidget from '@/components/dashboard/StatsWidget.vue';
import ToDo from '@/components/dashboard/ToDo.vue';
import ToCome from '@/components/dashboard/ToCome.vue';
import RecentUpdate from '@/components/dashboard/RecentUpdate.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <!-- Colonne de gauche : ToCome au-dessus, RecentUpdate en dessous -->
        <div class="col-span-12 xl:col-span-6 flex flex-col gap-4">
            <ToCome />
            <RecentUpdate />
        </div>

        <!-- Colonne de droite : ToDo -->
        <div class="col-span-12 xl:col-span-6">
            <ToDo />
        </div>
    </div>
</template>
