//# toUpper :: String -> String
//.
//. Returns the upper-case equivalent of its argument.
//.
//. See also [`toLower`](#toLower).
//.
//. ```javascript
//. > S.toUpper ('ABC def 123')
//. 'ABC DEF 123'
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('toUpper')
  ({})
  ([$.String, $.String])
  (s => s.toUpperCase ());
