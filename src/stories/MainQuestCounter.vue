<script setup>
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps({
  mainQuestCount: {
    type: Number,
    default: 3,
  },
});

const beforeCount = props.mainQuestCount - 1;
const currentCount = props.mainQuestCount;
const isCountUp = ref(false);

onMounted(() => {
  setTimeout(() => {
    isCountUp.value = true;
  }, 500); 
});
</script>

<template>
  <div class="counter">
    <span v-if="isCountUp" class="count" :key="currentCount">
      {{ currentCount }}
    </span>
    <span v-else>
      {{ beforeCount }}
    </span>
  </div>
</template>

<style>
.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  font-size: 50px;
  border: 0.5px solid #aca8a8;
  border-radius: 8%;
  box-shadow: 5px 5px 5px rgba(43, 34, 34, 3.5) ;
  overflow: hidden; /* 数字が外に飛び出さないように隠す */
}

.count {
  animation: fadeInUp 2s ease-in-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
