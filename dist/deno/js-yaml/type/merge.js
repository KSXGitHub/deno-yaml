'use strict';

import _type from "../type";
var module = {
  exports: {}
};
var exports = module.exports;
var Type = _type;

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});
export default module.exports;