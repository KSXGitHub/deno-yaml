'use strict';

import _type from "../type";
var module = {
  exports: {}
};
var exports = module.exports;
var Type = _type;
module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) {
    return data !== null ? data : [];
  }
});
export default module.exports;