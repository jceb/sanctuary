//# gt :: Ord a => a -> a -> Boolean
//.
//. Returns `true` [iff][] the *second* argument is greater than the first
//. according to [`Z.gt`][].
//.
//. ```javascript
//. > S.filter (S.gt (3)) ([1, 2, 3, 4, 5])
//. [4, 5]
//. ```

import * as $ from 'sanctuary-def';
import * as Z from 'sanctuary-type-classes';

import makeTypeVars from './internal/makeTypeVars.js';

const {a} = makeTypeVars ({a: 0});

export default $.def
  ('gt')
  ({a: [Z.Ord]})
  ([a, a, $.Boolean])
  (y => x => Z.gt (x, y));
