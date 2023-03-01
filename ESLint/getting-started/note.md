#### 快速启动

> npm init @eslint/config

```
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JavaScript
√ What style of indentation do you use? · 4
√ What quotes do you use for strings? · single
√ What line endings do you use? · windows
√ Do you require semicolons? · No / Yes
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest eslint@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing eslint-plugin-vue@latest, eslint@latest
```

#### 手动设置

+ 下载 eslint 

  > npm install --save-dev eslint

+ 创建配置文件` .eslintrc.{js,yml,json}`
+ 添加配置 https://eslint.org/docs/latest/use/configure/
  + rules
  + environments
  + custom configurations
  + plugins
  + ...

---

+ 只有在`.eslintrc.{js,yml,json}`配置文件中的`extends`选项中显式打开一些共享规则, 在`rules`选项中设置这些规则才会真正有效