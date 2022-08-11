import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfiguration = defineStore('configuration', () => {
  const defaultUnits = ref('metric')
  const defaultLocation = ref('Košice')
  
  return { defaultUnits, defaultLocation }
})
