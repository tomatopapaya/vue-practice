<template>
  <div>
    <div>
        <input v-model="search" type="text">
    </div>
  <ul>
    <li v-for="item in listend">
        {{item.name}}
    </li>
  </ul>
</div>
</template> 


<script setup lang="ts">
import { ref, computed  } from 'vue'
const search = ref("")
const list = ref([ {name: "蘋果"},{name: "香蕉"},{name: "橘子"},{name: "葡萄"},{name: "西瓜"} ])
const listend = computed(()=> {
    if (search.value.trim() === ""){
        return list.value
    }
    return list.value.filter(item=>item.name.includes(search.value.trim()))
})
</script>