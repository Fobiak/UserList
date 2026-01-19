import { mockUsers } from "@/mocks/mockUsers";
import type { User, UserUploadDelImage } from "@/models/User";

export interface UsersState {
  users: User[]
}

export const usersStore = createStore<UsersState>({
    state: {
        users: mockUsers
    },

    mutations: {
        setUsers(state, users: User[]) {
            state.users = users
        },

        updateUserImage(state, payload: UserUploadDelImage) {
            const user = state.users.find(user => user.id === payload.id)

            if (!user)
                return

            user.image = payload.image
        }

    },

    actions: {
        loadUsers({ commit }) {
            const data = localStorage.getItem('users')
            if (data)
                commit('setUsers', JSON.parse(data))
            },

        saveUsers({ state }) {
            localStorage.setItem('users', JSON.stringify(state.users))
        },

        uploadUserImage({ commit, dispatch }, Image: UserUploadDelImage) {
            commit('updateUserImage', Image)
            dispatch('saveUsers')
        },

        deleteUserImage({ commit, dispatch }, userId: number) {
            commit('updateUserImage', { id: userId, image: null })
            dispatch('saveUsers')
        }
    },

    getters: {
        allUsers(state): User[] {
            return state.users
        }
    }
})