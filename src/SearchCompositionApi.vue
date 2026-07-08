<template>
    <div class="search">
        <input v-model="keyword" placeholder="輸入關鍵字搜尋" />
        <input v-model="keyword2" placeholder ="輸入關鍵字2" />
    </div>
    Matching results:
    <ul>
        <li v-for="item in filteredList" :key="item.id">{{ item.name }}</li>
    </ul>
    測設用:
    <ul>
        <li v-for="item in filteredList2" >{{ item.name }}</li>
    </ul>
</template>

<script setup>
import { ref, computed } from 'vue';

const list = ref([ { id: 1, name: '蘋果' }, { id: 2, name: '香蕉' }, { id: 3, name: '奇異果' }, { id: 4, name: '芭樂' }, ]);
const list2 = ref([{ name : '菇菇寶貝'},{ name : '刺菇菇'}, { name:'綠菇菇'}, { name:'藍菇菇'}])
const keyword = ref('');
const keyword2 = ref('');
const filteredList = computed(() => {
  if (!keyword.value.trim()) return list.value;
  return list.value.filter(item => item.name.includes(keyword.value.trim()));
});
const filteredList2 = computed(() => {
    if (!keyword2.value.trim()) return list2,value;
    return list2.value.filter(item => item.name.includes(keyword2.value.trim()));
})
</script>