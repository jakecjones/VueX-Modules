import VuexPersist from 'vuex-persist';

const vuexLocal = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
  reducer: state => ({
      collection: state.collection
  })
})

export const store = new Vuex.Store({
    state: {
        collection: {}
    },
    getters: {

    },
    mutations: {

    },
    plugins: [vuexLocal.plugin]
})
