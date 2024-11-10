//# and :: Boolean -> Boolean -> Boolean
//.
//. Boolean "and".
//.
//. ```javascript
//. > S.and (false) (false)
//. false
//.
//. > S.and (false) (true)
//. false
//.
//. > S.and (true) (false)
//. false
//.
//. > S.and (true) (true)
//. true
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('and')
  ({})
  ([$.Boolean, $.Boolean, $.Boolean])
  (x => y => x && y);
