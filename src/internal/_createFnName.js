import _mapList from './_mapList'

function stringifyFn (fn) {
  return fn.displayName || fn.name || fn.toString()
}

// TODO(zuko): we should perform better stringification for complex values.
function stringifyArgument (x) {
  return Array.isArray(x) ? '[' + x.map(stringifyArgument).join(', ') + ']' :
         typeof x === 'function' ? stringifyFn(x) :
         JSON.stringify(x)
}

export default function _createFnName (name, args) {
  if (!args.length) return name
  return (
    name +
    '(' +
    _mapList(stringifyArgument, args).join(', ') +
    ')'
  )
}
