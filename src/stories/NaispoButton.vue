<script setup>

const props = defineProps({
    fontSize: {
        type: String,
        default: '20px'
    },
    sentence: {
        type: String,
        default: '文字を入力'
    },
    backgroundColor: {
        type: String,
        default: '#fff'
    },
    frameColor: {
        type: String,
        default: '#000'
    }
});
</script>

<template>
    <button class="buttons">{{ sentence }}</button>
</template>

<style scoped>
.buttons {
    padding: 5%;
    border-radius: 8px;
    border: 0.5px solid #aca8a8;
    font-size: v-bind(fontSize);
    background-color: v-bind(backgroundColor);
}
</style>