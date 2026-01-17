<script setup lang="ts">
import type { User } from '@/models/User'

const { user } = defineProps<{
    user: User
}>()
</script>

<template>
    <div class="user-card">
        <div class="user-info">
            <div class="user-photo">
                <img :src="user.image" alt="Фото" />
            </div>

            <div class="user-fio">
                <h3>{{ user.name }} {{ user.surname }}</h3>
                <p>Возраст: {{ user.age }}</p>
                <p>Email: {{ user.email }}</p>
            </div>
        </div>
        <div class="button">
            <ElButton>Загрузить фото</ElButton>
            <ElButton>Удалить фото</ElButton>
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
    justify-content: space-between;
    overflow: hidden;
}

.user-info {
    display: flex;
    gap: 12px;
}

.user-photo img {
    width: 64px;
    height: 64px;
    border-radius: 20%;
}

.user-fio {
    max-width: 100px;
}

.user-fio h3 {
    margin: 0;
    font-size: 16px;
}

.user-fio p {
    margin: 2px 0 0;
    font-size: 14px;
    color: #666;
}

.button {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

@media (max-width: 600px) {
  .user-fio {
    max-width: 120px;
    min-width: 0;
  }

  .user-fio p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

</style>
