<template>
  <section class="SearchPage">
    <h1>Location</h1>
    <input type="text" name="search" id="search" placeholder="Search city...">
    <div>
      <RouterLink to="/">Košice</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useConfiguration } from '@/stores/Configuration'
  const Configuration = useConfiguration()

  // Components
  import { RouterLink } from 'vue-router'


  // Make the page panel expanded
  Configuration.isPanelExpanded = true

</script>


<style lang="scss" scoped>

.SearchPage {
  padding: 30px 20px 20px;

  h1 {
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #999999;

    margin-bottom: 30px;
  }

  input {
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.05em;
    color: #9F9F9F;

    width: 100%;
    border: none;
    border-radius: 4px;
    background: #F3F3F3;
    padding: 10px 47px 10px 15px;
    outline: none;
    margin-bottom: 30px;

    background-image: url(@/assets/svg/location-black.svg);
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 11px;
  }
}

</style>
