'use strict';
const tsc = require('typescript');

module.exports = {
  process: (src, path) => {
    let result = src;

    // TypeScript files have to be .ts
    if ('.ts' !== path.slice(-3)) return result;

    let d = [];
    result = tsc.transpile(src, { module: tsc.ModuleKind.CommonJS, jsx: tsc.JsxEmit.React }, path, d);
    if (0 !== d.length) {
      console.log(`transpile info. path=${path}, d=${d}, ${JSON.stringify(result)}`);
    }
    return result;
  }
};