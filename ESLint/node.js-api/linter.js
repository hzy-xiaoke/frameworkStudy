const Linter = require('eslint').Linter;
const linter = new Linter();

const code = `
  var name = 'zhangsan'
`;

const messagesVerify = linter.verify(code, {
  rules: {
    semi: 'error',
    quotes: [
      'error',
      'double'
    ],
  }
});

console.log(messagesVerify);

const messagesVerifyAndFix = linter.verifyAndFix(code, {
  rules: {
    semi: 'error',
    quotes: [
      'error',
      'double'
    ],
  }
});

console.log(messagesVerifyAndFix);