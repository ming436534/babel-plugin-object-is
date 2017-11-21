var babel  = require("babel-core")
var plugin = require("../lib/index")
var assert = require("assert")

describe('babel-plugin-object-is', function() {

  it ('replaces Object.is with the npm package object-is', function() {
    var answer = babel.transform("if(Object.is('3', 3) === true);\nconst a = 1;", { plugins: [ plugin ] });
    assert(answer.code.indexOf("require('object-is')('3', 3)") >= 0)
  })

})
