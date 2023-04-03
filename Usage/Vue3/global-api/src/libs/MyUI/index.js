import MyButton from './MyButton.vue';
import MyInput from './MyInput.vue';

const componentPool = [
  MyButton,
  MyInput
]

export default {
  install(app, options) {
    if (options.components) {
      options.components.map(compName => {
        componentPool.map(comp => {
          if (compName === comp.name) {
            app.component(comp.name, comp);
          }
        })
      })
    } else {
      componentPool.map(comp => {
        app.component(comp.name, comp);
      })
    }
  }
}