'use strict';

import _jsYamlSchemaDefault_full2 from "./js-yaml/schema/default_full";
import _jsYamlSchemaDefault_safe2 from "./js-yaml/schema/default_safe";
import _jsYamlSchemaFailsafe2 from "./js-yaml/schema/failsafe";
import _jsYamlException from "./js-yaml/exception";
import _jsYamlSchemaDefault_full from "./js-yaml/schema/default_full";
import _jsYamlSchemaDefault_safe from "./js-yaml/schema/default_safe";
import _jsYamlSchemaCore from "./js-yaml/schema/core";
import _jsYamlSchemaJson from "./js-yaml/schema/json";
import _jsYamlSchemaFailsafe from "./js-yaml/schema/failsafe";
import _jsYamlSchema from "./js-yaml/schema";
import _jsYamlType from "./js-yaml/type";
import _jsYamlDumper from "./js-yaml/dumper";
import _jsYamlLoader from "./js-yaml/loader";
var module = {
  exports: {}
};
var exports = module.exports;
var loader = _jsYamlLoader;
var dumper = _jsYamlDumper;

function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}

module.exports.Type = _jsYamlType;
module.exports.Schema = _jsYamlSchema;
module.exports.FAILSAFE_SCHEMA = _jsYamlSchemaFailsafe;
module.exports.JSON_SCHEMA = _jsYamlSchemaJson;
module.exports.CORE_SCHEMA = _jsYamlSchemaCore;
module.exports.DEFAULT_SAFE_SCHEMA = _jsYamlSchemaDefault_safe;
module.exports.DEFAULT_FULL_SCHEMA = _jsYamlSchemaDefault_full;
module.exports.load = loader.load;
module.exports.loadAll = loader.loadAll;
module.exports.safeLoad = loader.safeLoad;
module.exports.safeLoadAll = loader.safeLoadAll;
module.exports.dump = dumper.dump;
module.exports.safeDump = dumper.safeDump;
module.exports.YAMLException = _jsYamlException; // Deprecated schema names from JS-YAML 2.0.x

module.exports.MINIMAL_SCHEMA = _jsYamlSchemaFailsafe2;
module.exports.SAFE_SCHEMA = _jsYamlSchemaDefault_safe2;
module.exports.DEFAULT_SCHEMA = _jsYamlSchemaDefault_full2; // Deprecated functions from JS-YAML 1.x.x

module.exports.scan = deprecated('scan');
module.exports.parse = deprecated('parse');
module.exports.compose = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');
export default module.exports;