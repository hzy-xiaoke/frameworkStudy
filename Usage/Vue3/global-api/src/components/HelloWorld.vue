<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ resultOne }}
      {{ resultTwo }}
      {{ resultThree }}
      {{ resultFour }}
    </p>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const instance = getCurrentInstance();
    console.log('instance =>', instance);

    const { appContext } = instance;
    console.log('appContext =>', appContext);

    const { utils } = appContext.config.globalProperties;

    let resultOne = utils.plus(665, 1);
    let resultTwo = utils.minus(889, 1);
    let resultThree = utils.mul(111, 6);
    let resultFour = utils.div(888, 1);

    return {
      resultOne,
      resultTwo,
      resultThree,
      resultFour
    }
  }
}
</script>

<style scoped>

</style>
