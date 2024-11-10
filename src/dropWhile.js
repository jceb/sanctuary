//# dropWhile :: (a -> Boolean) -> Array a -> Array a
//.
//. Retains the first element that does not satisfy the predicate,
//. and all subsequent elements.
//.
//. See also [`takeWhile`](#takeWhile).
//.
//. ```javascript
//. > S.dropWhile (S.odd) ([3, 3, 3, 7, 6, 3, 5, 4])
//. [6, 3, 5, 4]
//.
//. > S.dropWhile (S.even) ([3, 3, 3, 7, 6, 3, 5, 4])
//. [3, 3, 3, 7, 6, 3, 5, 4]
//. ```

import * as $ from 'sanctuary-def';

import makeTypeVars from './internal/makeTypeVars.js';

const {a} = makeTypeVars ({a: 0});

export default $.def
  ('dropWhile')
  ({})
  ([$.Predicate (a), $.Array (a), $.Array (a)])
  (pred => xs => {
     let idx = 0;
     while (idx < xs.length && pred (xs[idx])) idx += 1;
     return xs.slice (idx);
   });
