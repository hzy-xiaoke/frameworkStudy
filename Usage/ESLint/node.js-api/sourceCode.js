const SourceCode = require('eslint').SourceCode;

const code = 'const a = 1;\n const b = 2;';

const codeLines = SourceCode.splitLines(code);

console.log(codeLines);