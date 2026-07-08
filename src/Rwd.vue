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

/*. 當手機橫著放的時候（通常寬度在 480px 到 932px 之間，且為橫向） */
@media (max-width: 932px) and (orientation: landscape) {
  .card-container {
    flex-direction: row; /* 舉例：手機橫放時改成橫向排列 */
    /* 你也可以在這裡加入其他手機橫放專屬的樣式，例如調整卡片寬度或字體大小 */
    background-color: #f0f0f0; 
  }
}


/* 當螢幕寬度大於 768px（平板/電腦版）時 */
@media (min-width: 768px) {
  .card-container {
    flex-direction: row; /* 電腦版：橫向排列 */
  }
}
</style>