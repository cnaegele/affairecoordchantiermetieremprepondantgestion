<template>
  <header class="header-flex">
    <h2>Coordination des chantier. Gestion des employés répondants par métier (unité).</h2>
    <div class="user-info">
      <suspense>
        <UserInformation groupeSecurite="GoelandManager"></UserInformation>
      </suspense>
    </div>
  </header>
  <main>
    <div id="app">
      <div v-if="lesDatas.messageErreur != ''" id="divErreur">{{ lesDatas.messageErreur }}</div>
      <div v-else class="flex-container">
        <div>
          <suspense>
            <MetierChoix></MetierChoix>
          </suspense>
        </div>
        <div>
          <suspense>
            <EmployeEdition></EmployeEdition>
          </suspense>
        </div>
        <div>
          <suspense>
            <EmployeChoix></EmployeChoix>
          </suspense>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useDataStore } from '@/stores/datastore.ts'
  import UserInformation from '@/components/UserInformation.vue'
  import MetierChoix from './components/MetierChoix.vue'
  import EmployeEdition from './components/EmployeEdition.vue'
  import EmployeChoix from './components/EmployeChoix.vue'

  const lesDatas = useDataStore()
</script>

<style scoped>
  .header-flex {
    display: flex;
    align-items: baseline;
    gap: 15px;
  }

  .header-flex h2 {
    margin: 0;
    font-size: 1.5em;
  }

  .header-flex .user-info {
    font-size: 1em;
    color: #666;
    margin: 0;
  }

  #divErreur {
    background-color: lightsalmon;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 0px;
    padding: 5px;
    border-style: solid;
    border-width: thin;
    border-color: black;
    border-radius: 20px;
  }
</style>