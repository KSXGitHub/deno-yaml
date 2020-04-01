// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)
'use strict';

import _typeSet from "../type/set";
import _typePairs from "../type/pairs";
import _typeOmap from "../type/omap";
import _typeBinary from "../type/binary";
import _typeMerge from "../type/merge";
import _typeTimestamp from "../type/timestamp";
import _core from "./core";
import _schema from "../schema";
var module = {
  exports: {}
};
var exports = module.exports;
var Schema = _schema;
module.exports = new Schema({
  include: [_core],
  implicit: [_typeTimestamp, _typeMerge],
  explicit: [_typeBinary, _typeOmap, _typePairs, _typeSet]
});
export default module.exports;