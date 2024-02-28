<script setup>

const props = defineProps({
  operations: {
    type: Array,
    default: () => {
      return ['操作一', '操作二', '操作三']
    }
  },
  position: {
    type: Object,
    default: () => {
      return {
        top: '10px',
        left: '0px'
      }
    }
  },
  arrowDirection: {
    type: String,
    default: 'bottom'
  },
  arrowOffset: {
    type: Number,
    default: 0
  }
})

</script>

<template>
  <div 
    class="tooltip"
    :style="position"
  >
    <div class="operation">
      <span 
        v-for="(item, index) in operations" 
        :key="index" 
        class="item"
      >
        {{ item }}
      </span>
    </div>
    <div
      :class="arrowDirection === 'top' ? 'top-triangel' : 'bottom-triangle'"
      :style="{ left: `calc(50% + ${arrowOffset}px)` }"
    ></div>
  </div>
</template>

<style scoped>
.tooltip {
  --tooltip-bgcolor: rgba(0, 0, 0, 0.8);
  --tooltip-txtcolor: white;

  display: inline-block;
  position: fixed;
}
.operation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.operation>.item {
  width: 50px;
  background: var(--tooltip-bgcolor);
  color: var(--tooltip-txtcolor);
  font-size: 13px;
  text-align: center;
  padding: 10px 0;
  border-right: 1px solid var(--tooltip-txtcolor);
}
.operation>.item:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.operation>.item:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right: none;
}
.top-triangel {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid var(--tooltip-bgcolor);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  top: -19px;
  transform: translateX(-50%);
}
.bottom-triangle {
  width: 0;
  height: 0;
  border-top: 10px solid var(--tooltip-bgcolor);
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  bottom: -19px;
  transform: translateX(-50%);
}

</style>
