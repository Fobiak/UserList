import { SortDirectionEnum, type SortDirectionType, type SortType } from "@/constants/filters";
import type { UserUploadDelImage } from "@/models/User";

export function useUsersPresenters() {
  const store = useStore()

  const searchText = ref('')
  const sortBy = ref<SortType | null>(null)
  const sortDirection = ref<SortDirectionType>(SortDirectionEnum.ASC)
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
      return sortDirection.value === SortDirectionEnum.ASC
        ? a[field] > b[field]
          ? 1
          : -1
        : a[field] < b[field]
        ? 1
        : -1
    })
  )

  const toggleSortUsers = () => {
    sortDirection.value = sortDirection.value === SortDirectionEnum.ASC ? SortDirectionEnum.DESC : SortDirectionEnum.ASC
  }

  const uploadUserImage = (user: UserUploadDelImage) => {
    store.dispatch('uploadUserImage', user)
  }

  const deleteUserImage = (userId: number) => {
    store.dispatch('deleteUserImage', userId)
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
    isAvailableSort,
    uploadUserImage,
    deleteUserImage
  }
}