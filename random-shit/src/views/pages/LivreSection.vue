<template>
    <div class="card">
        <div class="flex justify-between items-center mb-4">
            <span class="font-semibold text-xl">Liste des livres</span>
            <Button icon="pi pi-plus" class="p-button-rounded p-button-success" @click="showDialog = true" />
        </div>

        <DataTable :value="livres" :rows="10" :paginator="true" responsiveLayout="scroll">
            <Column field="name" header="Titre" :sortable="true" style="width: 30%"></Column>
            <Column field="auteur" header="Auteur" :sortable="true" style="width: 20%"></Column>
            <Column field="statut" header="Statut" style="width: 10%">
                <template #body="slotProps">
                    <Tag :severity="getTagSeverity(slotProps.data.statut)">
                        <i :class="`${getStatutIcon(slotProps.data.statut)} mr-2`" />
                        {{ getStatutLabel(slotProps.data.statut) }}
                    </Tag>
                </template>
            </Column>
            <Column field="note" header="Note" style="width: 10%">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.note" :readonly="true" :cancel="false" />
                </template>
            </Column>
            <Column header="Actions" style="width: 5%">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="p-button-text p-button-sm mr-2"
                        @click="editLivre(slotProps.data)" />
                    <Button icon="pi pi-trash" class="p-button-text p-button-sm p-button-danger"
                        @click="deleteLivre(slotProps.data)" />
                </template>
            </Column>
        </DataTable>

        <!-- Dialog d'ajout/modification -->
        <Dialog v-model:visible="showDialog" header="Ajouter un livre" :modal="true" :style="{ width: '400px' }">
            <div class="field mb-3">
                <label>Titre</label>
                <InputText v-model="livreForm.name" class="w-full" />
            </div>
            <div class="field mb-3">
                <label>Auteur</label>
                <InputText v-model="livreForm.auteur" class="w-full" />
            </div>
            <div class="field mb-3">
                <label>Statut</label>
                <Dropdown v-model="livreForm.statut" :options="statutOptions" optionLabel="label" optionValue="value"
                    class="w-full" />
            </div>
            <div class="field mb-3">
                <label>Note</label>
                <Rating v-model="livreForm.note" :cancel="false" />
            </div>
            <template #footer>
                <Button label="Annuler" icon="pi pi-times" @click="showDialog = false" class="p-button-text" />
                <Button label="Enregistrer" icon="pi pi-check" @click="saveLivre" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import Button from 'primevue/button';
import Tag from 'primevue/tag';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Rating from 'primevue/rating';

const livres = ref([]);
const showDialog = ref(false);
const livreForm = ref({
    id: null,
    name: '',
    auteur: '',
    statut: 'a_lire',
    note: 0
});

const statutOptions = [
    { label: 'À lire', value: 'a_lire', icon: 'pi pi-book' },
    { label: 'En cours', value: 'en_cours', icon: 'pi pi-spinner' },
    { label: 'Lu', value: 'lu', icon: 'pi pi-check' }
];

function getStatutIcon(value) {
    const found = statutOptions.find(option => option.value === value);
    return found ? found.icon : '';
}

function getStatutLabel(value) {
    const found = statutOptions.find(option => option.value === value);
    return found ? found.label : '';
}

function getTagSeverity(statut) {
    switch (statut) {
        case 'a_lire':
            return 'secondary';
        case 'en_cours':
            return 'info';
        case 'lu':
            return 'success';
        default:
            return null;
    }
}

function loadLivres() {
    axios.get('http://localhost:3001/livres').then(response => {
        livres.value = response.data;
    });
}

function saveLivre() {
    if (!livreForm.value.id) {
        livreForm.value.id = Date.now();
        livres.value.push({ ...livreForm.value });
    } else {
        const index = livres.value.findIndex(l => l.id === livreForm.value.id);
        if (index !== -1) {
            livres.value[index] = { ...livreForm.value };
        }
    }

    axios.post('http://localhost:3001/livres', livres.value); // ✅ on envoie toute la liste
    showDialog.value = false;
    resetForm();
}

function editLivre(livre) {
    livreForm.value = { ...livre };
    showDialog.value = true;
}

function deleteLivre(livre) {
    livres.value = livres.value.filter(l => l.id !== livre.id);
    axios.post('http://localhost:3001/livres', livres.value); // ✅ idem ici
}

function resetForm() {
    livreForm.value = {
        id: null,
        name: '',
        auteur: '',
        statut: 'a_lire',
        note: 0
    };
}

onMounted(() => {
    loadLivres();
});
</script>

<style scoped>
.field {
    margin-bottom: 1rem;
}
</style>
