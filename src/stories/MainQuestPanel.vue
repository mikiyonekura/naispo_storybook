<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  collectedItems: {
    type: Array,
    default: () => [false, false, false], 
  },
});
</script>

<template>
  <div class="image-container">
    <div v-if="collectedItems[0]">
      <img class="item-image" :src="'./kamera_button_after.png'" alt="">
    </div>
    <div v-else>
      <img class="item-image" :src="'./kamera_button_before.png'" alt="">
    </div>
    <div v-if="collectedItems[1]">
      <img class="item-image" :src="'./kamera_button_after.png'" alt="">
    </div>
    <div v-else>
      <img class="item-image" :src="'./kamera_button_before.png'" alt="">
    </div>
    <div v-if="collectedItems[2]">
      <img class="item-image" :src="'./kamera_button_after.png'" alt="">
    </div>
    <div v-else>
      <img class="item-image" :src="'./kamera_button_before.png'" alt="">
    </div>
  </div>
</template>

<style>
.image-container {
  display: flex;
  gap: 20px;
}

.item-image {
  width: 50px;
  height: 50px;
  filter: drop-shadow(5px 5px 5px rgba(43, 34, 34, 3.5));
}
</style>
