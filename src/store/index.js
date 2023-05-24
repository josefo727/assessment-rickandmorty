import Vue from 'vue'
import Vuex from 'vuex'
import charactersList from './characters-list'
import charactersDetails from './characters-details'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    error: null,
    urlBase: 'https://rickandmortyapi.com/api',
    charactersIds: [],
    toast: {
      message: null,
      variant: null
    }
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    },
    SET_CHARACTERS_IDS(state, payload) {
      state.charactersIds = [...state.charactersIds, payload];
    },
    CLEAR_CHARACTERS_IDS(state) {
      state.charactersIds = [];
    },
    UNSELECT_CHARACTER(state, id) {
      state.charactersIds = state.charactersIds.filter(item => item !== id);
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    SET_TOAST(state, payload) {
      state.toast.message = payload.message;
      state.toast.variant = payload.variant;
    },
    CLEAR_TOAST(state) {
      state.toast.message = null;
      state.toast.variant = null;
    }
  },
  actions: {
    updateCharactersIds({ commit, state }, payload) {
      if (state.charactersIds.length < 3) {
        commit('SET_CHARACTERS_IDS', payload);
      } else {
        commit('CLEAR_TOAST');
        commit('SET_TOAST', {
          variant: 'warning',
          message: 'Solo se pueden seleccionar hasta tres elementos de la lista',
        });
      }
    }
  },
  getters: {
    getError: state => state.error,
    getIsLoading: state => state.isLoading,
    getCharantersIds: state => state.charactersIds,
  },
  modules: {
    charactersList,
    charactersDetails
  }
})
