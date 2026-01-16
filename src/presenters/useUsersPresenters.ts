import { useStore } from "vuex";

export function useUsersPresenters() {
  const store = useStore()

  const searchText = ref('')
  const sortBy = ref<'name' | 'age' | null>(null)
  const sortDirection = ref<'asc' | 'desc'>('asc')
  const onlyAdults = ref(false)

const loadUsers = () => {
      store.dispatch('loadUsers')
  }

  const users = computed(() =>
    [...store.getters.allUsers]
    .filter(user =>
      !searchText.value
        ? true
        : `${user.name} ${user.surname}`
            .toLowerCase()
            .includes(searchText.value.toLowerCase())
    )
    .filter(user => !onlyAdults.value || user.age >= 18)
    .sort((a, b) => {
      if (!sortBy.value) return 0
      const field = sortBy.value
      return sortDirection.value === 'asc'
        ? a[field] > b[field]
          ? 1
          : -1
        : a[field] < b[field]
        ? 1
        : -1
    })
  )

  const toggleSortUsers = () => {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  }

  const isAvailableSort = computed(() => !!sortBy.value)

  return {
    loadUsers,
    users,
    searchText,
    sortBy,
    sortDirection,
    onlyAdults,
    toggleSortUsers,
    isAvailableSort
  }
}