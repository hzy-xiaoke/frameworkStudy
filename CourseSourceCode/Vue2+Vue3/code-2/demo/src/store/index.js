import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  // 共享状态
  state: {
    cityId: '110100',
    cityName: '北京',
    cinemasList: [],
    isShowFooterBar: true
  },
  // 只能支持同步
  mutations: {
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    changeCityName (state, cityName) {
      state.cityName = cityName
    },
    changeCinemasList (state, cinemasList) {
      state.cinemasList = cinemasList
    },
    show (state) {
      state.isShowFooterBar = true
    },
    hide (state) {
      state.isShowFooterBar = false
    }

  },
  // 支持异步和同步
  actions: {
    getCinemasList (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=2574234`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(result => {
        store.commit('changeCinemasList', result.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
