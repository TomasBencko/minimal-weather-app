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

$bgAspectRation: 0.7;
$borderRadius: 24px;
$maxWidth: 520px;
$maxHeight: 700px;

.ContentPanel {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: calc(100% - (100vw * $bgAspectRation) + $borderRadius);
  
  background: #FFFFFF;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
  border-radius: $borderRadius $borderRadius 0 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition: min-height .3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.ContentPanel.expanded {
  $topMargin: 30px;
  min-height: calc(100% - $topMargin);
}

@media only screen and (min-width: $maxWidth) { // 1024px
  .ContentPanel {
    left: max($maxWidth / 2, 33%);
    bottom: 50%;
    transform: translate(-50%, 50%);
    
    min-height: unset;
    width: clamp(400px, 20%, $maxWidth);
    height: clamp(480px, 60%, $maxHeight);

    border-radius: $borderRadius;
    transition: height .3s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  .ContentPanel.expanded {
    min-height: unset;
    height: clamp(480px, 80%, 900px);
  }
}

</style>
