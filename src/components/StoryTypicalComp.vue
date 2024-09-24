<script setup>
import { defineProps, ref, onMounted, defineEmits } from 'vue';
import VTypical from 'vue-typical';

const props = defineProps({
    messages: Array,
    progress: Number,
    text_num: Number,
    changeText: Function,
    showLog: Function,
});

const isTyping = ref(true);

function changeText() {
    console.log('text_num, progress', props.text_num, props.progress);
    if (!(props.text_num === 0 && props.progress === 0)) {
        isTyping.value = true;
    }
    props.changeText();
}

function skipText() {
    isTyping.value = false;
}

function handleTypeEnd() {
    isTyping.value = false;
}

function calculateType() {
    // messagesやtext_numの安全性を確認
    if (props.messages && props.messages[props.text_num]) {
        setTimeout(() => {
            handleTypeEnd();
        }, props.messages[props.text_num].context.length * 30);
    } else {
        console.warn('Invalid text_num or messages');
    }
}

onMounted(() => {
    calculateType();
    console.log(props.messages);
});
</script>

<template>
    <div class="contents" v-if="messages.length > 0">
        <div class="human">
            <img style="width: 100%;" :src="'./murasaki_ending.png'">
        </div>

        <div>
            <div class="script" v-if="isTyping">
                <v-typical :steps="messages[text_num]?.context" @type-end="handleTypeEnd" />
            </div>
            <div class="script" v-else>
                {{ messages[text_num]?.context }}
            </div>
        </div>

        <div style="display: flex; position: relative; margin-top:5%; gap: 10px;">
            <button class="buttons" @click="showLog">ログ</button>
            <!-- セリフを表示中はスキップボタン、読み終えたら次へボタンに切り替え -->
            <button class="buttons" @click="skipText" v-if="isTyping">スキップ</button>
            <button class="buttons" @click="changeText" v-else>次へ</button>
        </div>
    </div>
</template>

<style>
.contents {
    font-size: 25px;
    font-weight: 700;
    padding:5% 5%;
    display: block; 
}

.human {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

.script {
    font-size: 25px;
    padding: 4%;
    font-weight: 700;
    height: 30vh;
    background-color: rgb(255, 247, 240, .9);
    border-radius: 16px;
    border: 2px solid #13957b;
    box-shadow: 1px 2px 0 #000;
}

.buttons {
    padding: 3%;
    background-color: rgb(255, 247, 240, .9);
    border-radius: 16px;
    border: 2px solid #13957b;
    box-shadow: 1px 2px 0 #000;
}
</style>
