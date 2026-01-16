<script setup lang="ts">
import type { User } from '@/models/User'
import UserItem from './UserItem.vue';

const props = defineProps<{
    users: User[]
}>()
</script>

<template>
    <div v-for="user in props.users" :key="user.id">
        <UserItem :user="user" />
    </div>
</template>