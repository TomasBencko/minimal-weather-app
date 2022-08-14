<template>
  <div class="ContentPanel" :class="{ expanded: isPanelExpanded }">
    <RouterView @expandPanel="expandPanel" @shrinkPanel="shrinkPanel" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  // Components
  import { RouterView } from 'vue-router'


  // Shrik or expand the panel based on its content
  let isPanelExpanded = ref<boolean>(false)
  function expandPanel() { isPanelExpanded.value = true }
  function shrinkPanel() { isPanelExpanded.value = false }

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
