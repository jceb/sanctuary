//# isJust :: Maybe a -> Boolean
//.
//. Returns `true` if the given Maybe is a Just; `false` if it is Nothing.
//.
//. ```javascript
//. > S.isJust (S.Just (42))
//. true
//.
//. > S.isJust (S.Nothing)
//. false
//. ```

import * as $ from 'sanctuary-def';

import makeTypeVars from './internal/makeTypeVars.js';

const {a} = makeTypeVars ({a: 0});

export default $.def
  ('isJust')
  ({})
  ([$.Maybe (a), $.Boolean])
  (maybe => maybe.isJust);
