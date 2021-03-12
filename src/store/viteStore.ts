import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { HelloComment } from '../types'

import createPersistedState from 'vuex-persistedstate'

export interface State {
  comments: Array<HelloComment>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    comments: [],
  },
  mutations: {
    addComment(state, comment: HelloComment) {
      state.comments.push(comment)
    },
    suppress(state, name: string) {
      state.comments = state.comments.filter((comment) => comment.name != name)
    },
  },
  getters: {
    getAllComments(state) {
      return state.comments
    },
  },
  plugins: [createPersistedState()],
})

export function useStore(): Store<State> {
  return baseUseStore(key)
}
