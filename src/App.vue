<template>
  <!-- <img class="bg-cover" src="@/assets/svg/bg-cover.svg" /> -->
  <Suspense>
    <ContentPanel />

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">

  // Components
  import ContentPanel from "@/components/ContentPanel.vue"



</script>

<style>

#app {
  background-image: url(./assets/svg/bg-cover.svg);
  background-position: top center;
  background-repeat: no-repeat;

  background-size: contain;
}

@media (min-width: 1024px) {
  #app {
    background-size: cover;
  }
}

</style>
