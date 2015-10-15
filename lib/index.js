module.exports = function (options) {
  var Plugin = options.Plugin
  var t = options.types

  return new Plugin("object-is", {

    visitor: {
      CallExpression: function (node, parent, scope, file) {
        if (this.get("callee").matchesPattern("Object.is")) {
          node.callee = t.callExpression(t.identifier("require"), [t.literal("object-is")])
        }
      }
    }

  })
}
