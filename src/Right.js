//# Right :: b -> Either a b
//.
//. Constructs a value of type `Either a b` from a value of type `b`.
//.
//. ```javascript
//. > S.Right (42)
//. Right (42)
//. ```

import * as $ from 'sanctuary-def';
import Either from 'sanctuary-either';

import makeTypeVars from './internal/makeTypeVars.js';

const {a, b} = makeTypeVars ({a: 0, b: 0});

export default $.def
  ('Right')
  ({})
  ([b, $.Either (a) (b)])
  (Either.Right);
