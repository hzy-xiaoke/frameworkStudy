<template>
  <div>
    <p>{{ superName }}</p>
    <p>{{ result }}</p>
    <button @click="changeCharacter">修改人物名称</button>
    <button @click="changeGreeting">切换问候语</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'App',
  setup() {
    const greetings = [
      '，欢迎加入!',
      '，欢迎到来!'
    ];
    const names = [
      '张三',
      '李四'
    ];

    const greeting = ref(greetings[0]);
    const name = ref(names[0]);

    const superName = computed(() => name.value + greeting.value);

    const result = computed({
      get() {
        return name.value + greeting.value;
      },
      set(newValue) {
        console.log('触发修改');
        const [ value, type ] = newValue;

        if (type === 1) {
          name.value = value;
          return;
        }

        if (type === 2) {
          greeting.value = value;
          return;
        }
      }
    });

    const changeCharacter = () => {
      result.value = [
        name.value === names[0] ? names[1] : names[0],
        1
      ];
    }

    const changeGreeting = () => {
      result.value = [
        greeting.value === greetings[0] ? greetings[1] : greetings[0],
        2
      ];
    }

    return {
      superName,
      result,
      changeCharacter,
      changeGreeting
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
