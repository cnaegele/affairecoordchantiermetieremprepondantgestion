import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface Employe {
  id: number
  nom: string
  prenom: string
  actif: number
  unite: string
}

interface DataStoreState {
  idEmployeUser: Ref<number>
  nomEmployeUser: Ref<string>
  prenomEmployeUser: Ref<string>
  loginEmployeUser: Ref<string>
  groupeSecurite: Ref<string>
  bInGroupe: Ref<boolean>
  idMetier: Ref<number>
  metier: Ref<string>
  employesRepondants: Ref<Employe[]>
  idEmployeChoisi: Ref<number>
  messageErreur: Ref<string>
}

export const useDataStore = defineStore('iddata', (): DataStoreState => {
  const idEmployeUser = ref<number>(0)
  const nomEmployeUser = ref<string>('')
  const prenomEmployeUser = ref<string>('')
  const loginEmployeUser = ref<string>('')
  const groupeSecurite = ref<string>('')
  const bInGroupe = ref<boolean>(false)
  const idMetier = ref<number>(0)
  const metier = ref<string>('')
  const employesRepondants = ref<Employe[]>([])
  const idEmployeChoisi = ref<number>(0)
  const messageErreur = ref<string>('')

  return {
    idEmployeUser,
    nomEmployeUser,
    prenomEmployeUser,
    loginEmployeUser,
    groupeSecurite,
    bInGroupe,
    idMetier,
    metier,
    employesRepondants,
    idEmployeChoisi,
    messageErreur  
  }
})