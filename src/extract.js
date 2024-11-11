//# extract :: Comonad w => w a -> a
//.
//. [Type-safe][sanctuary-def] version of [`Z.extract`][].
//.
//. ```javascript
//. > S.extract (S.Pair ('foo') ('bar'))
//. 'bar'
//. ```

import * as $ from 'sanctuary-def';
import * as Z from 'sanctuary-type-classes';

import makeTypeVars from './internal/makeTypeVars.js';

const {a, w} = makeTypeVars ({a: 0, w: 1});

export default $.def
  ('extract')
  ({w: [Z.Comonad]})
  ([w (a), a])
  (Z.extract);
