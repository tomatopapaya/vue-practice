<template>
  <div>
    <h1>這是父組件</h1>
    <Child1 :count-val="count" />
    
    <button @click="count++">在父組件這裡加 1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child1 from './Child1.vue';

const count = ref(0)
</script>