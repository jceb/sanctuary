//# snd :: Pair a b -> b
//.
//. `snd (Pair (x) (y))` is equivalent to `y`.
//.
//. ```javascript
//. > S.snd (S.Pair ('foo') (42))
//. 42
//. ```

import * as $ from 'sanctuary-def';
import * as Pair_ from 'sanctuary-pair';

import makeTypeVars from './internal/makeTypeVars.js';

const {a, b} = makeTypeVars ({a: 0, b: 0});

export default $.def
  ('snd')
  ({})
  ([$.Pair (a) (b), b])
  (Pair_.snd);
