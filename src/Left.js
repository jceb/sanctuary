//# Left :: a -> Either a b
//.
//. Constructs a value of type `Either a b` from a value of type `a`.
//.
//. ```javascript
//. > S.Left ('Cannot divide by zero')
//. Left ('Cannot divide by zero')
//. ```

import * as $ from 'sanctuary-def';
import * as Either from 'sanctuary-either';

import makeTypeVars from './internal/makeTypeVars.js';

const {a, b} = makeTypeVars ({a: 0, b: 0});

export default $.def
  ('Left')
  ({})
  ([a, $.Either (a) (b)])
  (Either.Left);
