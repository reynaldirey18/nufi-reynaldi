export const SET_USERS = 'SET_USERS';

export const state = () => ({
  users: [],
});

export const mutations = {
  [SET_USERS](state, users) {
    state.users = users;
  },
};

export const actions = {
  async all({commit}, params = {}) {
    const {data} = await this.$axios.get('/users/admin', {params});
    commit(SET_USERS, data.data.data);
    return data;
  },
};
