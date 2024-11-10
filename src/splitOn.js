//# splitOn :: String -> String -> Array String
//.
//. Returns the substrings of its second argument separated by occurrences
//. of its first argument.
//.
//. See also [`joinWith`](#joinWith) and [`splitOnRegex`](#splitOnRegex).
//.
//. ```javascript
//. > S.splitOn ('::') ('foo::bar::baz')
//. ['foo', 'bar', 'baz']
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('splitOn')
  ({})
  ([$.String, $.String, $.Array ($.String)])
  (separator => s => s.split (separator));
