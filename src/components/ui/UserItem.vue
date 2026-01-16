<script setup lang="ts">
import type { User } from '@/models/User';

const props = defineProps<{
    user: User
}>()
</script>
<template>
    {{ props.user.name }}
    {{ props.user.surname }}
    {{ props.user.age }}
    {{ props.user.email }}
</template>