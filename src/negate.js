//# negate :: ValidNumber -> ValidNumber
//.
//. Negates its argument.
//.
//. ```javascript
//. > S.negate (12.5)
//. -12.5
//.
//. > S.negate (-42)
//. 42
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('negate')
  ({})
  ([$.ValidNumber, $.ValidNumber])
  (n => -n);
