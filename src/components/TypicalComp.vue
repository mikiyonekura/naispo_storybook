<script setup>
import { defineEmits, defineProps, onMounted } from 'vue'
import VTypical from 'vue-typical';

const props = defineProps({
  steps: String
});
const emit = defineEmits(['type-end']);

// タイプが終わったタイミングでtimeoutを設定
function calculateType() {
  setTimeout(() => {
    emit('type-end');
  }, props.steps.length * 60);
}

onMounted(() => {
  calculateType();  
});
</script>

<template>
  <v-typical
    :steps="props.steps"
  ></v-typical>
</template>

<style>

</style>
