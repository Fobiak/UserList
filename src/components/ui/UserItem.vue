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
    gap: 20px;
    padding: 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.65);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.user-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.15);
}

.user-info {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    min-width: 0;
}

.avatar-uploader .avatar {
    width: 92px;
    height: 92px;
}

.avatar-uploader .avatar:hover {
    transform: scale(1.05);
}

.el-icon.avatar-uploader-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 92px;
    font-size: 28px;
    color: #8c939d;
    background: rgba(200, 200, 200, 0.2);
    transition: background 0.2s ease, transform 0.2s ease;
}

.el-icon.avatar-uploader-icon:hover {
    background: rgba(200, 200, 200, 0.35);
    transform: scale(1.05);
}

.user-fio h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #0f172a;
}

.user-fio p {
    margin: 2px 0 0;
    font-size: 14px;
    color: #64748b;
}

.button {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

@media (max-width: 600px) {
    .user-fio {
        flex: 1;
        min-width: 0;
    }

    .user-fio p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
