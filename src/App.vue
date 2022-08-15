<template>
    <ContentPanel />
</template>

<script setup lang="ts">

  /* COMPONENTS */
  import ContentPanel from "@/components/ContentPanel.vue"

</script>

<style lang="scss">

$maxWidth: 520px;

#app {
  background-color: #B9CBE5;
  background-image: url(./assets/bg-cover.svg);
  background-position: top center;
  background-repeat: no-repeat;
  overflow: hidden;

  background-size: contain;
}

@media (min-width: $maxWidth) {
  #app {
    background-size: cover;
  }
}

</style>
