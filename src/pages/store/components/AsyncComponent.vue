<template>
  <div>
    <h1>This is async data: {{ data }}</h1>
    <h1>From the AsyncComponent</h1>
    <button @click="redirect">Reload</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useExampleStore } from "../../../pinia/exampleStore";

const fetchData = async (): Promise<string> => {
  const store = useExampleStore();
  const products = await store.fetchData();
  return products.toString();
};

const data = ref("Loading...");
data.value = await fetchData(); // Fetch data immediately and await its result

// Redirect to the store page function
const router = useRouter();
const redirect = (): void => {
  console.log(router)
  router.push({
    name: "store[id]",
    params: { id: 1 },
    query: { param1: "value1", param2: "value2"}
  });
};
</script>
