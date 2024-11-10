//# add :: FiniteNumber -> FiniteNumber -> FiniteNumber
//.
//. Returns the sum of two (finite) numbers.
//.
//. ```javascript
//. > S.add (1) (1)
//. 2
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('add')
  ({})
  ([$.FiniteNumber, $.FiniteNumber, $.FiniteNumber])
  (x => y => x + y);
