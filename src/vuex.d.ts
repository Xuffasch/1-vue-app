// import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { HelloComment } from './types'

declare module '@vue/runtime-core' {
  interface State {
    comments: Array<HelloComment>
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
