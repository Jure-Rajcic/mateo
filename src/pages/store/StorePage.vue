<template>
  <div class="w-full h-full bg-red-200">
    <h1>Store</h1>
    <p>This is the about page</p>
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <div>Showing skeleton loader component...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import AsyncComponent from "./components/AsyncComponent.vue";
</script>
