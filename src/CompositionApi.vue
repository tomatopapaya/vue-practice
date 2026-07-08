<template>
  <div class="counter">
    <h3>Composition API 範例</h3>
    <p>計數器：{{ count }}</p>
    <p>兩倍數字：{{ doubleCount }}</p>
    <button @click="increment">加 1</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 1. 定義響應式資料（用 ref 包裹，預設值為 0）
const count = ref(0);

// 2. 定義計算屬性（會自動追蹤 count 的變化）
const doubleCount = computed(() => {
  return count.value * 2; // 在 <script> 中存取 ref 資料，必須加 .value
});

// 3. 定義普通的方法（函式）
const increment = () => {
  count.value++; // 一樣要用 .value 來修改值
};
</script>