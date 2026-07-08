<template>
  <div class="card-container">
    <div class="card">卡片 1</div>
    <div class="card">卡片 2</div>
    <div class="card">卡片 3</div>
  </div>
</template>


<style scoped>
.card-container {
  display: flex;
  flex-direction: column; /* 手機版：直向排列 */
  gap: 16px;
}

/* 當螢幕寬度大於 768px（平板/電腦版）時 */
@media (min-width: 768px) {
  .card-container {
    flex-direction: row; /* 電腦版：橫向排列 */
  }
}
</style>