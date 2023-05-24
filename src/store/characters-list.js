import ApiService from "@/adapters/ApiService";

export default {
  namespaced: true,
  state: {
    characters: [],
    page: 1
  },
  mutations: {
    SET_CHARACTERS(state, payload) {
      state.characters = [...state.characters, ...payload];
    },
    SET_PAGE(state, payload) {
      state.page = payload;
    }
  },
  actions: {
    async fetchCharacters({ commit, state, rootState }) {
      if (!state.page) return;
      commit('SET_LOADING', true, { root: true });
      const api = new ApiService(rootState.urlBase);
      const route = `/character?page=${state.page}`;
      api.get(route).then(response => {
        if (response.success) {
          commit('SET_CHARACTERS', response.data.results);
          const nextUrl = response.data.info.next;
          if (nextUrl) {
            const urlParts = nextUrl.split("=");
            const pageNumber = urlParts[1];
            commit('SET_PAGE', pageNumber);
          } else {
            commit('SET_PAGE', null);
          }
          commit('SET_ERROR', null, { root: true });
        } else {
          commit('SET_ERROR', response.message, { root: true });
        }
      });
      commit('SET_LOADING', false, { root: true });
    }
  },
  getters: {
    getCharacters: state => state.characters,
    getCharactersRemain: state => !!state.page,
  }
}

