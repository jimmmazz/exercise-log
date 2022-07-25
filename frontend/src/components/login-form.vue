<template>
    <form>
        <div>
            <label for="email">Email</label>
            <input v-model.trim="email" type="email" name="email" id="email" placeholder="email">
        </div>
        <div>
            <label for="password">Password</label>
            <input v-model.trim="password" type="password" name="password" id="password" placeholder="password">
        </div>
    </form>
    <button @click.prevent="handelClick">
        Login
    </button>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['userLogin'])

let user = ref({})
const error = ref(null)
const email = ref(null)
const password = ref(null)

const handelClick = async () => {
    //collects data to send to backend from form
    if (!email.value || !password.value) {
        error.value = 'All fields must be filled in with valid data'
        emit('userLogin', { error: error.value })

    } else {
        const userData = {
            email,
            password
        }

        try {
            //sends request and data to backend accepts return data and saves to user
            const response = await fetch('/routes/exerciseRoutes/login/', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            user.value = await response.json()

            // sends user data retrieved from backend to parent(Home)
            emit('userLogin', user.value)
        }
        catch (error) {
            console.log(error)
        }
    }


}
</script>

<style scoped>
</style>