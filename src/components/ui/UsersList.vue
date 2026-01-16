<script setup lang="ts">
import type { User } from '@/models/User'

const props = defineProps<{
    users: User[]
}>()
</script>

<template>
    <div v-for="user in props.users" :key="user.id">
        {{ user.name }}
    </div>
</template>