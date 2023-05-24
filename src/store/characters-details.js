import ApiService from "@/adapters/ApiService";

export default {
  namespaced: true,
  state: {
    characters: [],
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    CLEAR_CHARACTERS(state) {
      state.characters = [];
    }
  },
  actions: {
    async fetchCharacters({ commit, rootState }) {

      commit('CLEAR_CHARACTERS');

      if (rootState.charactersIds.length === 0) {
        commit('SET_ERROR', 'No se ha seleccionado ningún personaje', { root: true });
        return;
      }

      commit('SET_LOADING', true, { root: true });

      const api = new ApiService(rootState.urlBase);

      const promises = rootState.charactersIds.map(id => api.get(`/character/${id}`));

      const responses = await Promise.all(promises);

      const characters = responses.map(response => response.data);

      commit('SET_CHARACTERS', characters);

      commit('SET_LOADING', false, { root: true });
    }
  },
  getters: {
    getCharacters: state => state.characters,
  }
}
