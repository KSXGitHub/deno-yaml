// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346
'use strict';

import _typeMap from "../type/map";
import _typeSeq from "../type/seq";
import _typeStr from "../type/str";
import _schema from "../schema";
var module = {
  exports: {}
};
var exports = module.exports;
var Schema = _schema;
module.exports = new Schema({
  explicit: [_typeStr, _typeSeq, _typeMap]
});
export default module.exports;