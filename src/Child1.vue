<template>
  <div class="child-box">
    <h3>這是子組件</h3>
    <p>從父組件收到的數字是：{{ countVal }}</p>
  </div>
</template>

<script setup>
// 使用 defineProps 定義要接收的屬性（免 import，可以直接使用）
defineProps({
  countVal: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.child-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}
</style>