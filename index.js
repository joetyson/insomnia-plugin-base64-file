const fs = require('fs');

const encodePath = (path) => {
  const bm = fs.readFileSync(path);
  return (new Buffer(bm)).toString('base64');
}

module.exports.templateTags = [{
  name: 'base64file',
  displayName: 'Base64 - Encode File',
  description: 'Encode a file as base64',
  args: [
    {
      displayName: 'File',
      type: 'file',
    },
    {
      displayName: 'Quote',
      description: 'Enclose the result in quotes',
      defaultValue: false,
      type: 'boolean',
    },
  ],
  run (context, path, quote) {
    console.log('PATH: ', path, quote);
    let ret;
    try {
      ret = encodePath(path);
    } catch (err) {
      throw new Error(`Cannot encode: ${err.message}`);
    }

    if (quote) {
      return JSON.stringify(ret);
    }

    return ret
  }
}]