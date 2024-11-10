//# not :: Boolean -> Boolean
//.
//. Boolean "not".
//.
//. See also [`complement`](#complement).
//.
//. ```javascript
//. > S.not (false)
//. true
//.
//. > S.not (true)
//. false
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('not')
  ({})
  ([$.Boolean, $.Boolean])
  (x => !x);
