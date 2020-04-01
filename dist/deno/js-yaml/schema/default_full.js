// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.
'use strict';

import _typeJsFunction from "../type/js/function";
import _typeJsRegexp from "../type/js/regexp";
import _typeJsUndefined from "../type/js/undefined";
import _default_safe from "./default_safe";
import _schema from "../schema";
var module = {
  exports: {}
};
var exports = module.exports;
var Schema = _schema;
module.exports = Schema.DEFAULT = new Schema({
  include: [_default_safe],
  explicit: [_typeJsUndefined, _typeJsRegexp, _typeJsFunction]
});
export default module.exports;