<script setup lang="ts">
import UsersList from '@/components/ui/UsersList.vue';
import UserFilter from '@/components/ui/UserFilter.vue';
import { useUsersPresenters } from '@/presenters/useUsersPresenters';

const { loadUsers, users, searchText, sortBy, sortDirection, onlyAdults, isAvailableSort, toggleSortUsers } = useUsersPresenters()

onMounted(() => {
    loadUsers()
})
</script>
<template>
    <div class="block">
        <p>
            Страница со списком пользователей
        </p>
        <UserFilter v-model:search-text="searchText" v-model:sort-by="sortBy" v-model:sort-direction="sortDirection"
            v-model:only-adults="onlyAdults" :is-available-sort="isAvailableSort" :toggle-sort="toggleSortUsers" />
        <UsersList :users="users" />
    </div>
</template>

<style lang="css" scoped>
.block {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>