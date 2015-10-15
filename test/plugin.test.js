var babel  = require("babel")
var plugin = require("../lib/index")
var assert = require("assert")

var answer = babel.transform("Object.is(NaN, NaN)", { plugins: [ plugin ] });

assert(answer.code.indexOf("require('object-is')(NaN, NaN)") >= 0)

console.log("Tests pass!")
