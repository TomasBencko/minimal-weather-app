<template>
  <div class="ContentPanel">
    <RouterView />
  </div>
</template>

<script setup lang="ts">

  // Components
  import { RouterView } from 'vue-router'

</script>

<style scoped>

.ContentPanel {
  position: absolute;
  width: 100%;
  min-height: 66%;
  bottom: 0;
  /* padding: 20px; */
  background: #FFFFFF;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
  border-radius: 24px 24px 0 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  #ContentPanel {
    position: absolute;
  }
}

</style>
