<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

function goToVue(){
  router.push('/SecondPage')
}
</script>

<template>
    <button @click="goToVue">klikk meg</button>
    <h1>hello world</h1>
    <p>hello world</p>
    <p>hello there </p>
    
    <img src="https://i-viaplay-com.akamaized.net/viaplay-prod/941/44/1635452862-e314c09569121aac05fc9d8b680e8643bc93ccbb_NO.jpg?width=1600&height=900">
</template>