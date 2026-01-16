export const SortByEnum = {
  NAME: 'name',
  AGE: 'age',
} as const

export type SortType = typeof SortByEnum[keyof typeof SortByEnum]

export const SortDirectionEnum = {
  ASC: 'asc',
  DESC: 'desc',
} as const

export type SortDirectionType = typeof SortDirectionEnum[keyof typeof SortDirectionEnum]