// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.
'use strict';

import _typeFloat from "../type/float";
import _typeInt from "../type/int";
import _typeBool from "../type/bool";
import _typeNull from "../type/null";
import _failsafe from "./failsafe";
import _schema from "../schema";
var module = {
  exports: {}
};
var exports = module.exports;
var Schema = _schema;
module.exports = new Schema({
  include: [_failsafe],
  implicit: [_typeNull, _typeBool, _typeInt, _typeFloat]
});
export default module.exports;