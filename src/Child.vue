<template>
  <button @click="clickButton">
    點我
  </button>
</template>

<script setup>
const emit = defineEmits(['add-count'])

function clickButton() {
  emit('add-count')
}
</script>