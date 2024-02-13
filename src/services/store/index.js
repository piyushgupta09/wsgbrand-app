import { createStore } from 'vuex'
import repo from './repo';
import noti from '@/modules/authy/store/noti';
import authy from '@/modules/authy/store';
import brandy from '@/modules/brandy/store';
import factory from '@/modules/factory/store';
import vendor from '@/modules/vendor/store';
import Axios from '@/services/axios';

const store = createStore({
  state: {
    ebag: {
      errors: {},
      status: null,
      statusText: null,
    },
    toast: {},
    loading: false,
    helpline: 8860012001,
    ledgerChats: [],
  },
  mutations: {
    setErrorsBag (state, ebag) {
      state.ebag = ebag
    },
    setLoading (state, loading) {
      state.loading = loading
    },
    setToast (state, toast) {
      state.toast = toast
    },
    setLedgerChats (state, chats) {
      state.ledgerChats = chats
    },
  },
  actions: {
    setErrorsBag ({ commit }, ebag) {
      commit('setErrorsBag', ebag)
    },
    resetErrorsBag ({ commit }) {
      commit('setErrorsBag', {
        errors: {},
        status: null,
        statusText: null,
      })
    },
    setLoading ({ commit }, status) {
      commit('setLoading', status)
    },
    startLoading ({ commit }) {
      commit('setLoading', true)
    },
    stopLoading ({ commit }) {
      commit('setLoading', false)
    },
    setToast ({ commit }, toast) {
      commit('setToast', toast)
    },
    fetchLedgerChats ({ commit }, payload) {
      commit('setLoading', true)
      return new Promise((resolve, reject) => {
        Axios.get(`/chats/${payload.ledgerId}?page=${payload.page}`)
          .then(response => {
            commit('setLedgerChats', response.data.data)
            commit('setLoading', false)
            resolve(response.data)
          })
          .catch(error => {
            commit('setLoading', false)
            reject(error)
          })
      })
    }
  },
  getters: {
    ebag: state => state.ebag,
    toast: state => state.toast,
    loading: state => state.loading,
    errors: state => state.ebag.errors,

    getCollections(state) {
      return state.collections;
    },
    getCatagories(state) {
      return state.catagories;
    },
    getBrands(state) {
      return state.brands;
    },
    getCategories(state) {
      return state.categories;
    },
    getReviews(state) {
      return state.reviews;
    },
    getLedgerChats(state) {
      return state.ledgerChats;
    }
  },
  modules: {
    repo,
    noti,
    authy,
    brandy,
    factory,
    vendor,
  }
})

export default store
