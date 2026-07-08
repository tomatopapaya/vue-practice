<template>
  <div class="api-demo">
    <h2>查詢使用者 (.vue 版本)</h2>
    <input type="number" v-model="userId" placeholder="輸入 ID">
    <button @click="getUser">查詢</button>

    <hr>

    <div v-if="result">
      <p>結果: {{ result }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userId = ref(1)
const result = ref('')

async function getUser() {
  try {
    const response = await fetch(`http://localhost:5085/api/user/${userId.value}`)
    if (response.status === 404) {
      result.value = `找不到 ID 為 ${userId.value} 的使用者`
      return
    }
    const data = await response.json()
    result.value = `ID: ${data.id}, 名稱: ${data.name}`
  } catch (error) {
    result.value = '連不上後端，請檢查 CORS。'
  }
}
</script>

<style scoped>
/* 這裡的 CSS 只會套用在這個元件，不會污染到其他頁面 */
.api-demo {
  padding: 20px;
  font-family: sans-serif;
}
</style>