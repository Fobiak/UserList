<script setup lang="ts">
import UsersList from '@/components/ui/UsersList.vue';
import UserFilter from '@/components/ui/UserFilter.vue';
import { useUsersPresenters } from '@/presenters/useUsersPresenters';

const {
    loadUsers,
    users,
    searchText,
    sortBy,
    sortDirection,
    onlyAdults,
    isAvailableSort,
    toggleSortUsers,
    uploadUserImage,
    deleteUserImage
} = useUsersPresenters()

onMounted(() => {
    loadUsers()
})
</script>

<template>
    <div class="users-page">
        <header class="users-page__header">
            <h1 class="users-page__title">Управление пользователями</h1>
            <p class="users-page__subtitle">Поиск, фильтрация и управление профилями</p>
        </header>

        <div class="users-page__filter-section">
            <ElCollapse class="users-page__mobile-collapse">
                <ElCollapseItem title="Фильтры">
                    <UserFilter v-model:search-text="searchText" v-model:sort-by="sortBy"
                        v-model:sort-direction="sortDirection" v-model:only-adults="onlyAdults"
                        :is-available-sort="isAvailableSort" :toggle-sort="toggleSortUsers" />
                </ElCollapseItem>
            </ElCollapse>

            <div class="users-page__desktop-filter">
                <UserFilter v-model:search-text="searchText" v-model:sort-by="sortBy"
                    v-model:sort-direction="sortDirection" v-model:only-adults="onlyAdults"
                    :is-available-sort="isAvailableSort" :toggle-sort="toggleSortUsers" />
            </div>
        </div>

        <div class="users-page__list-container">
            <UsersList :users="users" @upload-image="uploadUserImage" @delete-image="deleteUserImage" />
        </div>
    </div>
</template>

<style lang="css" scoped>
.users-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    gap: 24px;
}

.users-page__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
}

.users-page__title {
    padding: 0;
    margin: 12px;
    font-size: 24px;
    font-weight: 700;
    color: #0a1122;
}

.users-page__subtitle {
    margin: 0;
    font-size: 14px;
    color: #64748b;
}

.users-page__filter-section {
    max-width: 900px;
    width: 100%;
    padding: 16px 20px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow:
        0 10px 30px rgba(15, 23, 42, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
    transition: box-shadow 0.2s ease;
}

.users-page__filter-section:hover {
    box-shadow:
        0 14px 40px rgba(15, 23, 42, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.users-page__mobile-collapse {
    display: none;
}

.users-page__desktop-filter {
    display: block;
}

.users-page__list-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 900px;
    width: 100%;
    height: 100%;
    padding: 0 20px 24px;
    overflow-y: auto;
}

.users-page__list-container::-webkit-scrollbar {
    width: 6px;
}

.users-page__list-container::-webkit-scrollbar-thumb {
    background: rgba(100, 116, 139, 0.3);
    border-radius: 4px;
}

:deep(.el-collapse) {
    border: none;
}

:deep(.el-collapse-item__header) {
    padding-right: 0;
    border-bottom: none;
    background: rgba(255, 255, 255, 0.7);
    max-height: 32px;
    min-height: 32px;
}

:deep(.el-collapse-item__content) {
    padding-bottom: 0;
    background: rgba(255, 255, 255, 0.7);
}

:deep(.el-collapse-item__wrap) {
    border-bottom: none;
    background: rgba(255, 255, 255, 0.7);
}

@media (max-width: 600px) {
    .users-page {
        gap: 16px;
    }

    .users-page__filter-section {
        max-width: 300px;
    }

    .users-page__title {
        margin-bottom: 0;
    }

    .users-page__subtitle {
        display: none;
    }

    .users-page__mobile-collapse {
        display: block;
    }

    .users-page__desktop-filter {
        display: none;
    }

    .users-page__list-container {
        padding: 0 12px 16px;
    }
}
</style>