//# even :: Integer -> Boolean
//.
//. Returns `true` if the given integer is even; `false` if it is odd.
//.
//. ```javascript
//. > S.even (42)
//. true
//.
//. > S.even (99)
//. false
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('even')
  ({})
  ([$.Integer, $.Boolean])
  (n => n % 2 === 0);
