<template>
  <div class="counter">
    <h3>Options API 範例</h3>
    <p>計數器：{{ count }}</p>
    <p>兩倍數字：{{ doubleCount }}</p>
    <button @click="increment">加 1</button>
  </div>
</template>

<script>
export default {
  // 1. 存放資料（狀態）的地方
  data() {
    return {
      count: 0
    };
  },
  // 2. 存放計算屬性的地方（會跟著 count 連動）
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  // 3. 存放方法（函式）的地方
  methods: {
    increment() {
      this.count++; // 在這裡必須使用 "this" 來存取資料
    }
  }
};
</script>