<template>
  <div>
    <p>common: {{ commonObj.name }}</p>
    <p>reactive: {{ reactiveObj.name }}</p>
    <p>readonly: {{ readonlyObj.name }}</p>
  </div>
</template>

<script>
import {
  reactive,
  readonly, 
  watch,
  isProxy,
  isReactive,
  isReadonly 
} from 'vue';

export default {
  name: 'ReactiveC',
  setup() {
    const commonObj = {
      name: 'zhangsan',
      age: 20
    }
    const reactiveObj = reactive({
      name: 'zhangsan',
      age: 20
    });

    const readonlyObj = readonly({
      name: 'zhangsan',
      age: 20
    });

    console.log('commonObj', {
      isProxy: isProxy(commonObj),
      isReactive: isReactive(commonObj),
      isReadonly: isReadonly(commonObj)
    });

    console.log('reactiveObj', {
      isProxy: isProxy(reactiveObj),
      isReactive: isReactive(reactiveObj),
      isReadonly: isReadonly(reactiveObj)
    });

    console.log('readonlyObj', {
      isProxy: isProxy(readonlyObj),
      isReactive: isReactive(readonlyObj),
      isReadonly: isReadonly(readonlyObj)
    });

    setTimeout(() => {
      commonObj.name = '张三';
      reactiveObj.name = '张三';
      readonlyObj.name = '张三';
    }, 1000);

    watch(() => commonObj.name, (newValue, oldValue) => {
      console.log('watch commonObj', {
        newValue,
        oldValue
      });
    })

    watch(() => reactiveObj.name, (newValue, oldValue) => {
      console.log('watch reactiveObj', {
        newValue,
        oldValue
      });
    })

    watch(() => readonlyObj.name, (newValue, oldValue) => {
      console.log('watch readonlyObj', {
        newValue,
        oldValue
      });
    })

    return {
      commonObj,
      reactiveObj,
      readonlyObj
    }
  }
}
</script>

<style>

</style>