<template>
  <div class="ContentPanel">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
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
  border-radius: 24px;
  overflow: hidden;
}

@media (min-width: 1024px) {
  #ContentPanel {
    position: absolute;
    /*  TODO  */
  }
}

</style>
