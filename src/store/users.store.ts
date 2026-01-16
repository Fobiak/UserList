import { mockUsers } from "@/mocks/mockUsers";
import type { User } from "@/models/User";
import { createStore } from "vuex";

export interface UsersState {
  users: User[]
}

export const usersStore = createStore<UsersState>({
    state: {
        users: []
    },

    mutations: {
        setUsers(state, users: User[]) {
            state.users = users
        }
    },

    actions: {
        loadUsers({ commit }) {
            commit('setUsers', mockUsers)
        }
    },

    getters: {
        allUsers(state): User[] {
            return state.users
        }
    }
})