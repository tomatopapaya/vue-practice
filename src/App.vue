<template>
  <div>
    <h1>{{ count }}</h1>

    <Child @add-count="addCount" />
  </div>

  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const count = ref(0)

function addCount() {
  count.value++
}
</script>