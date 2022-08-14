<template>
  <div class="ContentPanel" :class="{ expanded: isPanelExpanded }">
  <!-- <div class="ContentPanel"> -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useConfiguration } from '@/stores/Configuration'

  // Components
  import { RouterView } from 'vue-router'

  // Setup
  const Configuration = useConfiguration()


  // Variables
  const isPanelExpanded = computed(() => {
    return Configuration.isPanelExpanded
  })

</script>

<style lang="scss" scoped>

.ContentPanel {
  position: absolute;
  width: 100%;
  min-height: 66%;
  bottom: 0;
  background: #FFFFFF;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
  border-radius: 24px 24px 0 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  // Transitions
  transition: min-height .3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.ContentPanel.expanded {
  min-height: calc(100% - 30px);
}

@media (min-width: 1024px) {
  #ContentPanel {
    position: absolute;
  }
}

</style>
