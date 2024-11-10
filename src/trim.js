//# trim :: String -> String
//.
//. Strips leading and trailing whitespace characters.
//.
//. ```javascript
//. > S.trim ('\t\t foo bar \n')
//. 'foo bar'
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('trim')
  ({})
  ([$.String, $.String])
  (s => s.trim ());
