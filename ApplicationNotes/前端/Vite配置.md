#### 路径别名

```javascript
resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
}
```

#### 打包后即可直接运行

> npm install @vitejs/plugin-legacy terser -D

```javascript
import { defineConfig } from 'vite'
import { resolve } from 'path'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
// https://cn.vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    legacy({
      targets: [
        '> 5%',
        'last 2 versions',
        'Android >= 4'
      ]
    })
  ]
})
```

```javascript
import fs from 'fs'

// index.html的文件路径
const distPath = './dist/index.html'

// 读取index.html文件内容
let htmlText = fs.readFileSync(distPath, 'utf8')
// 处理结果
let resultText = ''
// 按行拆分
let htmlArr = htmlText.match(/.*\n/g) || []

htmlArr.forEach(str => {
  // 删掉nomodule属性
  str = str.replace(/\s?nomodule\s?/g, ' ')
  // 删掉crossorigin属性
  str = str.replace(/\s?crossorigin\s?/g, ' ')
  // 将data-src替换为src
  str = str.replace(/data-src/g, 'src')
  // 将带有type="module"的行过滤掉
  if (!/type="module"/i.test(str)) {
    resultText += str
  }
})

fs.writeFileSync(distPath, resultText, 'utf8')
```

