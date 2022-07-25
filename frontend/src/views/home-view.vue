<script setup>
import { ref } from 'vue';
import LoginForm from '../components/login-form.vue'

const user = ref(null)

function updateUser(userData) {
    console.log(userData)
    user.value = userData
}
</script>

<template>
    <LoginForm @user-login="updateUser" />
    <p v-if="user"> {{ user.error ? user.error : user.email }} </p>
</template>

<style scoped>
</style>
