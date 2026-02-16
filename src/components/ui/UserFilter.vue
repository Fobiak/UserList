<script setup lang="ts">
import { SortByEnum, SortDirectionEnum, type SortDirectionType, type SortType } from '@/constants/filters';
import SortUpIcon from '@/shared/assets/icons/SortUpIcon.vue';
import SortDownIcon from '@/shared/assets/icons/SortDownIcon.vue';

const props = defineProps<{
    isAvailableSort: boolean
    toggleSort: () => void
}>()

const searchText = defineModel<string>('searchText')
const sortBy = defineModel<SortType | null>('sortBy')
const sortDirection = defineModel<SortDirectionType>('sortDirection')
const ageCheckbox = defineModel<boolean>('onlyAdults')

const caretIcon = computed(() => sortDirection.value === SortDirectionEnum.ASC ? SortUpIcon : SortDownIcon)
</script>

<template>
    <div class="filters">
        <ElInput v-model="searchText" placeholder="Поиск" class="filters__input" />

        <div class="filters__sort-group">
            <ElSelect v-model="sortBy" placeholder="Сортировка" :class="[
                'filters__select',
                { 'filters__select--full-width': !isAvailableSort }
            ]">
                <ElOption label="По имени" :value="SortByEnum.NAME" />
                <ElOption label="По возрасту" :value="SortByEnum.AGE" />
            </ElSelect>

            <ElButton v-if="isAvailableSort" class="filters__sort-button" @click="props.toggleSort">
                <component :is="caretIcon" />
            </ElButton>
        </div>

        <ElCheckbox v-model="ageCheckbox" class="filters__checkbox">
            Больше 18 лет
        </ElCheckbox>
    </div>
</template>

<style lang="css" scoped>
.filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
}

.filters__input {
    flex: 4;
}

.filters__sort-group {
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.filters__checkbox {
    flex: 1;
}

.filters__select {
    width: 100%;
}

.filters__select :deep(.el-select__wrapper) {
    border-right: none;
    border-radius: 4px 0 0 4px;
}

.filters__select--full-width :deep(.el-select__wrapper) {
    border-radius: 4px;
}

.filters__sort-button {
    width: 32px;
    padding: 0;
    border-left: none;
    border-radius: 0 4px 4px 0;
}

@media (max-width: 600px) {
    .filters {
        flex-direction: column;
        gap: 10px;
    }

    .filters__input {
        flex: auto;
        width: 100%;
    }

    .filters__sort-group {
        flex: auto;
        width: 100%;
        display: flex;
    }

    .filters__select {
        flex: 1;
    }

    .filters__checkbox {
        flex: auto;
        width: 100%;
    }
}
</style>