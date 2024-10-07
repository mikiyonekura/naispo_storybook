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
  <div class="counter-container">
    <!-- 宝箱の画像 -->
    <div class="counter-image">
      <img class="image" :src="'./takarabako.png'" alt="takarabako">
    </div>
    <!-- カウントのテキスト -->
    <div class="counter-text">
      <span v-if="isCountUp" class="count" :key="currentCount">
        {{ currentCount }}
      </span>
      <span v-else>
        {{ beforeCount }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.counter-container {
  position: relative;
  width: 100%; 
}

.counter-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%; 
  transform: translate(-50%, -50%);
}

.image {
  width: 100%;
  object-fit: contain; 
}

.counter-text {
  position: absolute;
  top: 58%;
  left: 48%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  overflow: hidden;
  color: #324b6d;
}

.count {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
