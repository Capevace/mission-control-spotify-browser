import api from '@/api';

const state = {
  accessToken:
    'BQBOF5vsg_0TrBxpDoSCiuLlxJuF0g_syhPQJ3PxXZKRwY5Vgf6xgnMWI5lHsyaWgo3zi1-BBlVBs_tqcx6lEMeHbF02c8lD-0-qr3g8NcZFk4zgw_SGEkSK3oiiKlPVhhR4Su7FFGJj7o44sLU-BqQb_DzB63fKIwLP7UXD3UWoOvzEQrxScnWEC_SnPx9IcIuT13TRgiL2W-Q2prLgJohx8RWjUDsggYoHAsneEZ9iRM4D95GIbm6ISaYMAWvGQgNpdk3a-pKyEw',
  refreshToken: '',
  expiryTime: ''
};

const getters = {
  getAccessToken: state => state.accessToken,
  getRefreshToken: state => state.refreshToken,
  getExpiryTime: state => state.expiryTime
};

const mutations = {
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },

  SET_REFRESH_TOKEN(state, token) {
    state.refreshToken = token;
  },

  SET_EXPIRY_TIME(state, time) {
    state.expiryTime = time;
  }
};

const actions = {
  login: async function() {
    // try {
    //   const response = await api.auth.getUserAuthURL();
    //   if (response.data) {
    //     window.location.href = response.data;
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  },

  refreshToken: async function({ commit, state }) {
    console.log('TRYING TO REFRESH TOKEN');
    // try {
    //   if (state.refreshToken) {
    //     const response = await api.auth.refreshToken(state.refreshToken);
    //     commit('SET_ACCESS_TOKEN', response.data.access_token);

    //     return response;
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  },

  logout: function() {
    let script = document.createElement('script');

    script.src = 'https://www.spotify.com/logout/';
    document.getElementById('app').appendChild(script);

    window.localStorage.clear();
    window.sessionStorage.clear();

    setTimeout(function() {
      location.reload();
    }, 1000);
  },

  setAccessToken({ commit }, token) {
    commit('SET_ACCESS_TOKEN', token);
  },

  setRefreshToken({ commit }, token) {
    commit('SET_REFRESH_TOKEN', token);
  },

  setExpiryTime({ commit }, time) {
    commit('SET_EXPIRY_TIME', time);
  }
};

const module = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default module;
