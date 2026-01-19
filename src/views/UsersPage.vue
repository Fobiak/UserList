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
        <span>
            Управление пользователями
        </span>
        <UserFilter v-model:search-text="searchText" v-model:sort-by="sortBy" v-model:sort-direction="sortDirection"
            v-model:only-adults="onlyAdults" :is-available-sort="isAvailableSort" :toggle-sort="toggleSortUsers"
            class="filter" />
        <div class="list-wrapper">
            <UsersList :users="users" @upload-image="uploadUserImage" @delete-image="deleteUserImage" />
        </div>
    </div>
</template>

<style lang="css" scoped>
.page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 12px;
    box-sizing: border-box;
    gap: 16px;
}

.filter {
    border-bottom: 2px solid antiquewhite;
    border-top: 2px solid antiquewhite;
    padding: 10px 0;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
}

.list-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    gap: 12px;
}
</style>
