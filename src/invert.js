//# invert :: Group g => g -> g
//.
//. [Type-safe][sanctuary-def] version of [`Z.invert`][].
//.
//. ```javascript
//. > S.invert (Sum (5))
//. Sum (-5)
//. ```

import * as $ from 'sanctuary-def';
import * as Z from 'sanctuary-type-classes';

import makeTypeVars from './internal/makeTypeVars.js';

const {g} = makeTypeVars ({g: 0});

export default $.def
  ('invert')
  ({g: [Z.Group]})
  ([g, g])
  (Z.invert);
