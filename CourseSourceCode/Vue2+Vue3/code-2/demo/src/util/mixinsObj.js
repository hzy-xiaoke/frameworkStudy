const obj = {
  created () {
    this.$store.commit('hide')
    console.log('created => isShowFooterBar =', this.$store.state.isShowFooterBar)
  },
  destroyed () {
    this.$store.commit('show')
    console.log('destroyed => isShowFooterBar =', this.$store.state.isShowFooterBar)
  }
}

export default obj
