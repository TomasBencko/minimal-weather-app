<template>
    <ContentPanel />
</template>

<script setup lang="ts">

  // Components
  import ContentPanel from "@/components/ContentPanel.vue"



</script>

<style lang="scss">

$maxWidth: 520px;

#app {
  background-image: url(./assets/svg/bg-cover.svg);
  background-position: top center;
  background-repeat: no-repeat;

  background-size: contain;
}

@media (min-width: $maxWidth) {
  #app {
    background-size: cover;
  }
}

</style>
