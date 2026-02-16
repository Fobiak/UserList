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
    <div class="block">
        <ElInput v-model="searchText" placeholder="Поиск" />
        <div class="sort">
            <ElSelect v-model="sortBy" placeholder="Сортировка" clearable class="select"
                :class="{ 'select-full': !isAvailableSort }">
                <ElOption label="По имени" :value="SortByEnum.NAME" />
                <ElOption label="По возрасту" :value="SortByEnum.AGE" />
            </ElSelect>
            <ElButton v-if="isAvailableSort" class="sort-button" @click="props.toggleSort">
                <component :is="caretIcon" />
            </ElButton>
        </div>
        <ElCheckbox v-model="ageCheckbox">Больше 18 лет</ElCheckbox>
    </div>
</template>

<style lang="css" scoped>
.block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;
}

.block :first-child {
    flex: 4;
}

.sort {
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.block :last-child {
    flex: 1;
}

.select {
    width: 100%;
}

.select :deep(.el-select__wrapper) {
    border-right: none;
    border-radius: 4px 0 0 4px;
}

.select-full :deep(.el-select__wrapper) {
    border-right: 1px;
    border-radius: 4px;
}

.sort-button {
    width: 16px;
    padding: 0;
    border-left: none;
    border-radius: 0 4px 4px 0;
}

@media (max-width: 600px) {
    .block {
        flex-direction: column;
        gap: 10px;
    }

    .sort {
        width: 100%;
        display: flex;
    }

    .select {
        flex: 1;
    }
}
</style>