<template>
    <div class="w-full h-full bg-red-200">
        <h1>Store[id: {{ id }}, query: [{{ param1 }}]]</h1>
        <p>This is the store:id page</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const param1 = route.query.param1;


</script>
