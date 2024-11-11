//# Just :: a -> Maybe a
//.
//. Constructs a value of type `Maybe a` from a value of type `a`.
//.
//. ```javascript
//. > S.Just (42)
//. Just (42)
//. ```

import * as $ from 'sanctuary-def';
import * as Maybe from 'sanctuary-maybe';

import makeTypeVars from './internal/makeTypeVars.js';

const {a} = makeTypeVars ({a: 0});

export default $.def
  ('Just')
  ({})
  ([a, $.Maybe (a)])
  (Maybe.Just);
