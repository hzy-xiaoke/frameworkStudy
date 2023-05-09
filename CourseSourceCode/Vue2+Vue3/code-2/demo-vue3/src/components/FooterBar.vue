<template>
  <div>
    <ul>
      <router-link to="/home" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myActive' : ''">首页</li>
      </router-link>
      <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myActive' : ''">影院</li>
      </router-link>
      <router-link to="/center" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'myActive' : ''">我的</li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul{
  position: fixed;
  bottom: 0;
  z-index: 100;
  border: 1px solid #eeeeee;
  background: white;
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  li{
      flex: 1;
      text-align: center;
  }
}

.myActive{
  color: red;
}
</style>
