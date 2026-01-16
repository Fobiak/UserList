<script setup lang="ts">
import type { User } from '@/models/User'

const { user } = defineProps<{
    user: User
}>()
</script>

<template>
    <div class="user-card">
        <div class="user-photo">
            <img :src="user.image" alt="Фото" />
        </div>

        <div class="user-info">
            <h3>{{ user.name }} {{ user.surname }}</h3>
            <p>Возраст: {{ user.age }}</p>
            <p>Email: {{ user.email }}</p>
        </div>
    </div>
</template>

<style lang="css" scoped>
.user-card {
    display: flex;
    gap: 12px;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 8px;
}

.user-photo img {
    width: 64px;
    height: 64px;
    border-radius: 20%;
}

.user-info h3 {
    margin: 0;
    font-size: 16px;
}

.user-info p {
    margin: 2px 0 0;
    font-size: 14px;
    color: #666;
}
</style>
