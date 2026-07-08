// import { createRouter, createWebHistory } from 'vue-router';
// // 引入你的頁面組件
// import HomeView from '../views/HomeView.vue';
// import LoginView from '../views/LoginView.vue';
// import MemberView from '../views/MemberView.vue';

// // 1. 定義路由表（有哪些網頁）
// const routes = [
//   { path: '/', component: HomeView },
//   { path: '/login', component: LoginView },
//   { 
//     path: '/member', 
//     component: MemberView,
//     // ✨ 這裡設定 meta 屬性，標記這個頁面需要登入（保全會看這個標記）
//     meta: { requiresAuth: true } 
//   }
// ];

// // 2. 建立路由實例
// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// // 3. ✨✨✨ 就在這裡寫你的 Middleware (路由守衛) ✨✨✨
// router.beforeEach((to, from, next) => {
//   // 模擬檢查登入狀態（實務上可能會看 localStorage 或 Vuex/Pinia 狀態）
//   const isLoggedIn = !!localStorage.getItem('user_token'); 

//   // 如果要去的地方需要驗證 (requiresAuth)，而且使用者沒有登入
//   if (to.meta.requiresAuth && !isLoggedIn) {
//     alert('請先登入！');
//     next('/login'); // 攔截！強制轉向到登入頁面
//   } else {
//     next(); // 放行！
//   }
// });

// // 4. 最後把設定好的 router 匯出給 main.js 使用
// export default router;