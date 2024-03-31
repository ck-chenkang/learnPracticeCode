<script setup lang="ts">
import { usePersonStore } from './store/index.js';
import { onMounted } from 'vue';

const personStore = usePersonStore();
console.log(personStore.web.url);
onMounted(() => {
  console.log('哈哈哈钱啊');
});
</script>

<template>
  <div>
    {{ personStore.web.url }}
  </div>
</template>

<style scoped></style>
