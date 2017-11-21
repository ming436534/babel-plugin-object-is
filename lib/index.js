module.exports = function (options) {
  var t = options.types
  return {
    visitor: {
      CallExpression: function (node, parent, scope, file) {
        if (node.get('callee').matchesPattern("Object.is")) {
          node.get('callee').replaceWith(t.callExpression(t.identifier("require"), [t.stringLiteral("object-is")]))
        }
      }
    }
  }
}
