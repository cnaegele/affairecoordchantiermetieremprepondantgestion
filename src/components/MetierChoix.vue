<template>
    <div class="metiers-container">
        <h3>Métiers</h3>
        <ul class="metiers-liste">
            <li v-for="m in metiers" :key="m.idmetier" :class="{
                selectionne: m.idmetier === idMetierChoisi,
                inactif: m.bactif === 0
            }" :title="m.bactif === 0 ? 'Métier inactif' : ''" @click="choixMetier(m.idmetier, m.metier)">
                {{ m.metier }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import type { Metier, ApiResponseMetiers } from '@/axioscalls.ts'
    import { ref } from 'vue'
    import { useDataStore } from '@/stores/datastore.ts'
    import { getMetiers } from '@/axioscalls.ts'

    const lesDatas = useDataStore()
    const response: ApiResponseMetiers = await getMetiers()
    const metiers: Metier[] = response.success && response.data ? response.data : []

    const idMetierChoisi = ref<number | null>(lesDatas.idMetier ?? null)

    const choixMetier = (idmetier: number, metier: string) => {
        idMetierChoisi.value = idmetier
        lesDatas.idMetier = idmetier
        lesDatas.metier = metier
    }
</script>

<style scoped>
    .metiers-container {
        padding: 1px;
    }

    .metiers-liste {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .metiers-liste li {
        padding: 6px 10px;
        cursor: pointer;
        border-left: 3px solid transparent;
        border-radius: 3px;
    }

    .metiers-liste li:hover {
        background-color: #f0f0f0;
    }

    .metiers-liste li.selectionne {
        font-weight: bold;
        border-left-color: #1976d2;
        background-color: #e8f0fb;
    }

    .metiers-liste li.inactif {
        color: #999;
        font-style: italic;
    }
</style>