//# mult :: FiniteNumber -> FiniteNumber -> FiniteNumber
//.
//. Returns the product of two (finite) numbers.
//.
//. ```javascript
//. > S.mult (4) (2)
//. 8
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('mult')
  ({})
  ([$.FiniteNumber, $.FiniteNumber, $.FiniteNumber])
  (x => y => x * y);
