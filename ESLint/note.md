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
...
```

#### 手动设置

+ 下载 eslint 

  > npm install --save-dev eslint

+ 创建配置文件 `.eslintrc.{js,yml,json}`
+ 添加配置
  + rules
  + environments
  + custom configurations
  + plugins
  + ...

---

只有在 `.eslintrc.{js,yml,json}` 配置文件中的 `extends` 选项中显式打开一些规则集, 在 `rules` 选项中设置规则集中的规则才会生效

---

#### 核心概念

+ **Rules** 

  >  A rule validates if your code meets a certain expectation, and what to do if it does not meet that expectation

  Rules Reference:  https://eslint.org/docs/latest/rules/

+ Configuration Files

  > You can include built-in rules, how you want them enforced, plugins with custom rules, shareable configurations, which files you want rules to apply to, and more.

  > If there are multiple configuration files in the same directory, ESLint only uses one. The priority order is as follows:
  >
  > 1. `.eslintrc.js`
  > 2. `.eslintrc.cjs`
  > 3. `.eslintrc.yaml`
  > 4. `.eslintrc.yml`
  > 5. `.eslintrc.json`
  > 6. `package.json`

  Configuration Files: https://eslint.org/docs/latest/use/configure/configuration-files

+ Shareable Configurations

  > Shareable configurations are ESLint configurations that are shared via npm.

  > Often shareable configurations are used to enforce style guides using ESLint’s built-in rules.

+ **Plugins**

  > An ESLint plugin is an npm module that can contain a set of ESLint rules, configurations, processors, and environments. 

  + 引入插件

  ```
  {
      // ...
      "plugins": [
          "@jquery/jquery", // means @jquery/eslint-plugin-jquery
          "@foobar" // means @foobar/eslint-plugin
      ]
      // ...
  }
  ```

  + 使用插件

  ```
  {
      // ...
      "plugins": [
          "jquery",   // eslint-plugin-jquery
          "@foo/foo", // @foo/eslint-plugin-foo
          "@bar"      // @bar/eslint-plugin
      ],
      "extends": [
          "plugin:@foo/foo/recommended",
          "plugin:@bar/recommended"
      ],
      "rules": {
          "jquery/a-rule": "error",
          "@foo/foo/some-rule": "error",
          "@bar/another-rule": "error"
      },
      "env": {
          "jquery/jquery": true,
          "@foo/foo/env-foo": true,
          "@bar/env-bar": true,
      }
      // ...
  }
  ```

  Configure Plugins: https://eslint.org/docs/latest/use/configure/plugins

+ Parsers

  > An ESLint parser converts code into an abstract syntax tree that ESLint can evaluate.

  > Often custom parsers are included as part of shareable configurations or plugins, so you don’t have to use them directly.

+ Custom Processors

  > An ESLint processor extracts JavaScript code from other kinds of files, then lets ESLint lint the JavaScript code.

+ Formatters

  > An ESLint formatter controls the appearance of the linting results in the CLI.

  Formatters Reference: https://eslint.org/docs/latest/use/formatters/

+ Integrations

  > One of the things that makes ESLint such a useful tool is the ecosystem of integrations that surrounds it.

  Integrations: https://eslint.org/docs/latest/use/integrations

+ CLI & Node.js API

  > The ESLint CLI is a command line interface that lets you execute linting from the terminal. 
  >
  > The CLI has a variety of options that you can pass to its commands.

  Command Line Interface Reference: https://eslint.org/docs/latest/use/command-line-interface

  > The ESLint Node.js API lets you use ESLint programmatically from Node.js code. 

  Node.js API Reference: https://eslint.org/docs/latest/integrate/nodejs-api

