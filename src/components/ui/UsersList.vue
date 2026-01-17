<script setup lang="ts">
import type { User, UserUploadDelImage } from '@/models/User'
import UserItem from './UserItem.vue';

const props = defineProps<{
    users: User[]
}>()

const emits = defineEmits<{
    uploadImage: [UserUploadDelImage]
    deleteImage: [number]
}>()

function handleUploadImage(user: UserUploadDelImage) {
    emits('uploadImage', { id: user.id, image: user.image })
}

function handleDeleteImage(userId: number) {
    emits('deleteImage', userId)
}

</script>

<template>
    <div v-for="user in props.users" :key="user.id">
        <UserItem :user="user" @upload-image="handleUploadImage" @delete-image="handleDeleteImage"/>
    </div>
</template>