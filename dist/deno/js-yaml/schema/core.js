// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.
'use strict';

import _json from "./json";
import _schema from "../schema";
var module = {
  exports: {}
};
var exports = module.exports;
var Schema = _schema;
module.exports = new Schema({
  include: [_json]
});
export default module.exports;