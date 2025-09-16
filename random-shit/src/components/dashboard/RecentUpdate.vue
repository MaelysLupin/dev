<script setup>

</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Récent</div>
        <DataTable :value="products" :rows="10" :paginator="true" responsiveLayout="scroll">
            <Column field="category" header="Catégorie" :sortable="true" style="width: 35%"></Column>
            <Column field="name" header="Name" :sortable="true" style="width: 35%"></Column>
            <Column style="width: 15%" header="Statut"></Column>
        </DataTable>
    </div>
</template>
