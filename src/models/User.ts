export interface User {
    id: number
    name: string
    surname: string
    age: number
    email: string
    image: string | null
}

export type UserUploadDelImage = Pick<User, 'id' | 'image'>
