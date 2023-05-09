<template>
  <div>
    <ul>
      <router-link to="/home/nowplaying" v-slot="{ navigate, isActive }" custom>
        <li @click="navigate">
          <span :class="isActive ? 'tab-active' : ''">正在热播</span>
        </li>
      </router-link>
      <router-link to="/home/comingsoon" v-slot="{ navigate, isActive }" custom>
        <li @click="navigate">
          <span :class="isActive ? 'tab-active' : ''">即将上线</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style lang="scss" scoped>
ul {
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-active {
    color: orange;
    padding: 5px 0;
    border-bottom: 2px solid orange;
  }
}
</style>
