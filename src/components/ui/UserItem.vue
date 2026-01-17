<script setup lang="ts">
import type { User, UserUploadDelImage } from '@/models/User'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage, type UploadFile } from 'element-plus'

const { user } = defineProps<{
    user: User
}>()

const emits = defineEmits<{
    uploadImage: [UserUploadDelImage]
    deleteImage: [number]
}>()

function beforeUpload(file: File) {
    const isFileSizeLarger = file.size / 1024 / 1024 < 1

    if (!isFileSizeLarger) {
        ElMessage.error('Размер изображения не может быть больше 1MB!')
        return false
    }

    return true
}


function handleChangeImage(file: UploadFile) {
    const raw = file.raw

    if (!raw)
        return

    const reader = new FileReader()

    reader.onload = () => {
        const result = reader.result
        if (typeof result === 'string') {
            emits('uploadImage', { id: user.id, image: result })
        }
    }

    reader.readAsDataURL(raw)
}

function handleDeleteImage() {
    emits('deleteImage', user.id)
}
</script>

<template>
    <div class="user-card">
        <div class="user-info">
            <ElUpload :before-upload="beforeUpload" :on-change="handleChangeImage" :show-file-list="false"
                accept="image/*" :auto-upload="false" class="avatar-uploader">
                <img v-if="user.image" :src="user.image" class="avatar" />
                <ElIcon v-else class="avatar-uploader-icon">
                    <Plus />
                </ElIcon>
            </ElUpload>

            <div class="user-fio">
                <h3>{{ user.name }} {{ user.surname }}</h3>
                <p>Возраст: {{ user.age }}</p>
                <p>Email: {{ user.email }}</p>
            </div>
        </div>
        <div v-if="user.image" class="button">
            <ElButton @click="handleDeleteImage">Удалить фото</ElButton>
        </div>
    </div>
</template>

<style lang="css">
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}
</style>

<style lang="css" scoped>
.user-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 8px;
    justify-content: space-between;
    overflow: hidden;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.avatar-uploader .avatar {
    width: 64px;
    height: 64px;
    display: block;
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 64px;
    height: 64px;
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
    }

    .user-fio p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
