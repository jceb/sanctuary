//# contramap :: Contravariant f => (b -> a) -> f a -> f b
//.
//. [Type-safe][sanctuary-def] version of [`Z.contramap`][].
//.
//. ```javascript
//. > S.contramap (s => s.length) (Math.sqrt) ('Sanctuary')
//. 3
//. ```

import * as $ from 'sanctuary-def';
import * as Z from 'sanctuary-type-classes';

import makeTypeVars from './internal/makeTypeVars.js';

const {a, b, f} = makeTypeVars ({a: 0, b: 0, f: 1});

export default $.def
  ('contramap')
  ({f: [Z.Contravariant]})
  ([$.Fn (b) (a), f (a), f (b)])
  (f => contravariant => Z.contramap (f, contravariant));
