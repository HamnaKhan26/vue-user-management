<template>
    <div class="loading-spinner"></div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue';

onMounted(() => {
    console.log('LoadingSpinner Component mounted');
});

</script>

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
}

@keyframes spin {
    to {
        rotate: 360deg;
    }
}

.loading-spinner {
    animation: spin 2s linear;
    border-radius: 100%;
    border: 4px dotted rebeccapurple;
    height: 32px;
    width: 32px;
}
</style>