<template>
  <div class="">
    <div class="contanier">
      <router-view></router-view>
    </div>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footerBar from '@/components/FooterBar'
export default {
  components: {
    footerBar
  }
}
</script>
div{

}
<style lang="scss">
*{ margin: 0; padding: 0;}
ul{ list-style: none;}
.contanier{ padding-bottom: 50px;}
</style>
