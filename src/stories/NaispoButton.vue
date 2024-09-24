<script setup>

const props = defineProps({
    fontSize: {
        type: String,
        default: '25px'
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
        default: '#13957b'
    }
});
</script>

<template>
    <button class="buttons">{{ sentence }}</button>
</template>

<style scoped>
.buttons {
    padding: 3%;
    border-radius: 16px;
    border: 2px solid v-bind(frameColor);
    box-shadow: 1px 2px 0 #000;
    font-size: v-bind(fontSize);
    background-color: v-bind(backgroundColor);
}
</style>