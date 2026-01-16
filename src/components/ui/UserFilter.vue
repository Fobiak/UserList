<script setup lang="ts">
import { CaretBottom, CaretTop } from '@element-plus/icons-vue'

const props = defineProps<{
    isAvailableSort: boolean
    toggleSort: () => void
}>()

const searchText = defineModel<string>('searchText')
const sortBy = defineModel<'name' | 'age' | null>('sortBy')
const sortDirection = defineModel<'asc' | 'desc'>('sortDirection')
const ageCheckbox = defineModel<boolean>('onlyAdults')

const caretIcon = computed(() => sortDirection.value === 'asc' ? CaretBottom : CaretTop)
</script>

<template>
    <div class="block">
        <ElInput v-model="searchText" placeholder="Поиск" />
        <ElSelect v-model="sortBy" placeholder="Сортировка" clearable>
            <ElOption label="По имени" value="name" />
            <ElOption label="По позрасту" value="age" />
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