<script setup>
import { reactive, ref, nextTick } from 'vue'

import { getFormatDateTime } from '../utils/common'
import Tooltip from './Tooltip.vue'

const MESSAGE_TYPE = {
  TIME_POINT: 1,
  OTHER_MSG: 2,
  SELF_MSG: 3
}

let timer = null
const containerRef = ref()
const contentRef = ref()
const tooltipRef = ref()

const state = reactive({
  sender: '我',
  receiver: '张三',
  currentMessage: '',
  currentTime: '',
  messageList: [
    {
      type: MESSAGE_TYPE.TIME_POINT,
      content: '2024年1月1日 10:13'
    },
    {
      type: MESSAGE_TYPE.OTHER_MSG,
      content: '你好'
    },
    {
      type: MESSAGE_TYPE.SELF_MSG,
      content: '你好'
    },
    {
      type: MESSAGE_TYPE.SELF_MSG,
      content: '有什么事情吗?'
    },
    {
      type: MESSAGE_TYPE.TIME_POINT,
      content: '2024年1月1日 10:15'
    },
    {
      type: MESSAGE_TYPE.OTHER_MSG,
      content: '没有'
    },
    {
      type: MESSAGE_TYPE.SELF_MSG,
      content: '哦哦'
    }
  ],
})

const tooltipState = reactive({
  showTooltip: false,
  operations: ['复制', '转发', '删除'],
  position: {
    top: 0,
    left: 0
  },
  arrowDirection: 'bottom',
  arrowOffset: 0
})

const handleStart = (event) => {
  timer = setTimeout(() => {
    timer = null
    handleLongPress(event)
  }, 800)
} 

const handleEnd = () => {
  if (timer) {
    clearTimeout(timer)
  }
}

const handleLongPress = (event) => {
  const container = containerRef.value
  const target = event.target
  const tooltip = tooltipRef.value.$el
  
  tooltipState.showTooltip = true

  nextTick(() => {
    const containerInfo = container.getBoundingClientRect()
    const targetInfo = target.getBoundingClientRect()
    const tooltipInfo = tooltip.getBoundingClientRect()
    const baseOffset = 12

    tooltipState.position.left = `${containerInfo.left + containerInfo.width / 2 - tooltipInfo.width / 2}px`
    tooltipState.position.top = `${targetInfo.top - tooltipInfo.height - baseOffset}px`
  })
}

const sendMessage = () => {
  if (!state.currentMessage) {
    return
  }

  const currentTime = getFormatDateTime()

  if (state.currentTime !== currentTime) {
    state.messageList.push({
      type: MESSAGE_TYPE.TIME_POINT,
      content: currentTime
    })
    state.currentTime = currentTime
  }

  state.messageList.push({
    type: MESSAGE_TYPE.SELF_MSG,
    content: state.currentMessage
  })

  state.currentMessage = ''

  nextTick(() => {
    const scrollHeight = contentRef.value.scrollHeight
    const offsetHeight = contentRef.value.offsetHeight
    if (scrollHeight > offsetHeight) {
      contentRef.value.scroll({
        top: scrollHeight - offsetHeight,
        behavior: 'smooth'
      })
    }
  })
}

</script>

<template>
  <div class="container" 
    @touchstart="tooltipState.showTooltip = false"
    @mousedown="tooltipState.showTooltip = false"
    ref="containerRef"
  >
    <header>
      <div class="header-left">◁</div>
      <div class="header-center">{{ state.receiver }}</div>
      <div class="header-right">···</div>
    </header>
    <div class="content" ref="contentRef">
      <template v-for="(message, index) in state.messageList" :key="index">
        <template v-if="message.type === MESSAGE_TYPE.TIME_POINT">
          <div class="time-point">{{ message.content }}</div>
        </template>
        <template v-else-if="message.type === MESSAGE_TYPE.OTHER_MSG">
          <div class="message-box left" 
            @touchstart="handleStart" 
            @touchend="handleEnd"
            @mousedown="handleStart"
            @mouseup="handleEnd"
          >
            <div class="avatar">{{ state.receiver }}</div>
            <div class="message">{{ message.content }}</div>
          </div>
        </template>
        <template v-else-if="message.type === MESSAGE_TYPE.SELF_MSG">
          <div class="message-box right" 
            @touchstart="handleStart" 
            @touchend="handleEnd"
            @mousedown="handleStart"
            @mouseup="handleEnd"
          >
            <div class="message">{{ message.content }}</div>
            <div class="avatar">{{ state.sender }}</div>
          </div>
        </template>
      </template>
    </div>
    <footer>
      <input
        v-model="state.currentMessage"
        type="search" 
        placeholder="请输入聊天信息"
      />
      <button @click="sendMessage">发送</button>
    </footer>
  </div>
  <Tooltip 
    v-show="tooltipState.showTooltip"
    :operations="tooltipState.operations"
    :position="tooltipState.position"
    :arrow-direction="tooltipState.arrowDirection"
    :arrow-offset="tooltipState.arrowOffset"
    ref="tooltipRef"
  />
</template>

<style scoped>
img {
  display: block;
  width: 150px;
}

.container {
  width: 375px;
  margin: 0 auto;
  position: relative;
}

header {
  height: 50px;
  background: var(--theme-bgcolor);
  color: var(--theme-txtcolor);
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
}

.content {
  height: 582px;
  border-left: 1px solid var(--theme-bgcolor);
  border-right: 1px solid var(--theme-bgcolor);
  overflow: auto;
  padding: 10px;
  box-sizing: border-box;
}

.content>.message-box {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 8px;
}

.content>.message-box>.avatar {
  width: 40px;
  height: 40px;
  background: #cccccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
}

.content>.message-box>.message {
  background: var(--theme-bgcolor);
  color: var(--theme-txtcolor);
  margin: 3px 5px;
  padding: 8px;
  border-radius: 5px;
  user-select: text;
  max-width: 15em;
  word-wrap: break-word;
  white-space: pre-wrap;
}
.content>.message-box>.message:active {
  opacity: 0.6;
}

.time-point {
  clear: both;
  text-align: center;
  color: #c3c3c3;
  font-size: 14px;
  padding: 5px 0;
}

footer {
  height: 35px;
  background: #cccccc;
  display: flex;
  position: sticky;
  bottom: 0;
}

footer>input {
  flex-grow: 3;
  padding: 0 8px;
  outline: none;
  border: 1px solid var(--theme-bgcolor);
  letter-spacing: 1px;
}

footer>button {
  flex-grow: 1;
  background: var(--theme-bgcolor);
  color: var(--theme-txtcolor);
  border: none;
}

footer>button:active {
  opacity: 0.5;
}

.left {
  float: left;
  clear: both;
}

.right {
  float: right;
  clear: both;
}

</style>
