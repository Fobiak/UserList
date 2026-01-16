<script setup lang="ts">
import UsersList from '@/components/ui/UsersList.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

onMounted(() => {
    store.dispatch('loadUsers')
})
</script>
<template>
    <p>
        Страница со списком пользователей
    </p>
    <UsersList :users="store.getters.allUsers" />
</template>