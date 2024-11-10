//# toLower :: String -> String
//.
//. Returns the lower-case equivalent of its argument.
//.
//. See also [`toUpper`](#toUpper).
//.
//. ```javascript
//. > S.toLower ('ABC def 123')
//. 'abc def 123'
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('toLower')
  ({})
  ([$.String, $.String])
  (s => s.toLowerCase ());
