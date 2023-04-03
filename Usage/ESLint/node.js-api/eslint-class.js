const { ESLint } = require('eslint');

;(async function main() {
  // 创建 Elint 实例
  const eslint = new ESLint({ fix: true });

  // 载入需要 lint 的文件
  const results = await eslint.lintFiles(['src/*.js']);

  // 更新到各文件当中
  await ESLint.outputFixes(results);

  // 格式输出结果
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  // 打印 lint 结果
  console.log(resultText);
})().catch(error => {
  process.exitCode = 1;
  console.log(error);
});