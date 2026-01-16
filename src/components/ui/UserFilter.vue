<script setup lang="ts">
import { SortByEnum, SortDirectionEnum, type SortDirectionType, type SortType } from '@/constants/filters';
import { CaretBottom, CaretTop } from '@element-plus/icons-vue'

const props = defineProps<{
    isAvailableSort: boolean
    toggleSort: () => void
}>()

const searchText = defineModel<string>('searchText')
const sortBy = defineModel<SortType | null>('sortBy')
const sortDirection = defineModel<SortDirectionType>('sortDirection')
const ageCheckbox = defineModel<boolean>('onlyAdults')

const caretIcon = computed(() => sortDirection.value === SortDirectionEnum.ASC ? CaretTop : CaretBottom)
</script>

<template>
    <div class="block">
        <ElInput v-model="searchText" placeholder="Поиск" />
        <ElSelect v-model="sortBy" placeholder="Сортировка" clearable>
            <ElOption label="По имени" :value="SortByEnum.NAME" />
            <ElOption label="По возрасту" :value="SortByEnum.AGE" />
        </ElSelect>
        <ElButton v-if="props.isAvailableSort" @click="props.toggleSort">
            <ElIcon>
                <component :is="caretIcon" />
            </ElIcon>
        </ElButton>
        <ElCheckbox v-model="ageCheckbox">Больше 18 лет</ElCheckbox>
    </div>
</template>

<style lang="css" scoped>
.block {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    gap: 10px;
}
</style>