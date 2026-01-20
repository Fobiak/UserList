<script setup lang="ts">
import UsersList from '@/components/ui/UsersList.vue';
import UserFilter from '@/components/ui/UserFilter.vue';
import { useUsersPresenters } from '@/presenters/useUsersPresenters';

const { loadUsers,
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
    <div class="page">
        <header class="header">
            <h1>Управление пользователями</h1>
            <p>Поиск, фильтрация и управление профилями</p>
        </header>

        <div class="filter">
            <ElCollapse class="mobile-collapse">
                <ElCollapseItem title="Фильтры">
                    <UserFilter v-model:search-text="searchText" v-model:sort-by="sortBy"
                        v-model:sort-direction="sortDirection" v-model:only-adults="onlyAdults"
                        :is-available-sort="isAvailableSort" :toggle-sort="toggleSortUsers" />
                </ElCollapseItem>
            </ElCollapse>

            <div class="desktop-filter">
                <UserFilter v-model:search-text="searchText" v-model:sort-by="sortBy"
                    v-model:sort-direction="sortDirection" v-model:only-adults="onlyAdults"
                    :is-available-sort="isAvailableSort" :toggle-sort="toggleSortUsers" />
            </div>
        </div>
        <div class="list-wrapper">
            <UsersList :users="users" @upload-image="uploadUserImage" @delete-image="deleteUserImage" />
        </div>
    </div>
</template>

<style lang="css" scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
    gap: 24px;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
}

.header h1 {
    padding: 0;
    font-size: 24px;
    font-weight: 700;
    color: #0a1122;
}

.header p {
    margin: 0;
    font-size: 14px;
    color: #64748b;
}

.filter {
    max-width: 900px;
    width: 100%;
    padding: 16px 20px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow:
        0 10px 30px rgba(15, 23, 42, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.filter:hover {
    box-shadow:
        0 14px 40px rgba(15, 23, 42, 0.12),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.mobile-collapse {
    display: none;
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

.desktop-filter {
    display: block;
}

.list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 900px;
    width: 100%;
    height: 100%;
    padding: 0 20px 24px;
    overflow-y: auto;
}

.list-wrapper::-webkit-scrollbar {
    width: 6px;
}

.list-wrapper::-webkit-scrollbar-thumb {
    background: rgba(100, 116, 139, 0.3);
    border-radius: 4px;
}

@media (max-width: 600px) {
    .page {
        gap: 16px;
    }

    .filter {
        max-width: 300px;
    }

    .header h1 {
        margin-bottom: 0;
    }

    .header p {
        display: none;
    }

    .mobile-collapse {
        display: block;
    }

    .desktop-filter {
        display: none;
    }

    .list-wrapper {
        padding: 0 12px 16px;
    }
}
</style>
