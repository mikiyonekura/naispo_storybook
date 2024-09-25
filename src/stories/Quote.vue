<script setup>
import { defineProps, ref, onMounted } from 'vue';
import VTypical from 'vue-typical';
import NaispoButton from './NaispoButton.vue';

const mockMessages = [
'みんな今日は奈良先端大へようこそ！',
'ぼくは、奈良先端大マスコットキャラクター『NASURA(ナスラ)』だよーよろしくね',
'今日はみんなにとっておきの実験ショーを見せたくて、会いに来たんだ',
];

const isTyping = ref(true);
const text_num = ref(0);
const props = defineProps({
    fontSize: {
        type: String,
        default: '25px'
    }
});

// 5秒後にisTypingをfalseにする
onMounted(() => {
    setTimeout(() => {
        isTyping.value = false;
    }, 2000);
});

function skipText() {
    isTyping.value = false;
}

function changeText() {
    isTyping.value = true;
    text_num.value++;
    if (text_num.value == 3) { //一旦セリフがループするように設定
        text_num.value = 0;
    }
    setTimeout(() => {
        isTyping.value = false;
    }, 2000);
}
</script>

<template>
    <div class="contents" :style="{ fontSize: props.fontSize }">
        <div class="human">
            <img style="width: 100%;" :src="'./nasura.png'">
        </div>

        <div>
            <div class="script" v-if="isTyping">
                <v-typical :steps="mockMessages[text_num]" />
            </div>
            <div class="script" v-else>
                {{ mockMessages[text_num] }}
            </div>
        </div>

        <div style="display: flex; position: relative; margin-top:5%; gap: 10px;">
            <NaispoButton :sentence="'ログ'" :fontSize="'20px'" @click="showLog"/>
            <NaispoButton :sentence="'スキップ'" :fontSize="'20px'" @click="skipText" v-if="isTyping"/>
            <NaispoButton :sentence="'次へ'" :fontSize="'20px'" @click="changeText" v-else/>
        </div>
    </div>
</template>

<style>
.contents {
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
    padding: 4%;
    font-weight: 700;
    height: 30vh;
    background-color: fff;
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
