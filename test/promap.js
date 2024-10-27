import {deepStrictEqual as eq} from 'node:assert';

import test from 'oletus';

import * as S from 'sanctuary';
import promap from 'sanctuary/promap';


test ('promap', () => {

  eq (S.promap === promap, true);
  eq (String (S.promap), 'promap :: Profunctor p => (a -> b) -> (c -> d) -> p b c -> p a d');

  const before = S.map (S.prop ('length'));
  const after = S.join (S.mult);
  eq (S.promap (before) (after) (S.sum) (['foo', 'bar', 'baz', 'quux']), 169);

  eq (S.promap (Math.abs) (S.add (1)) (Math.sqrt) (-100), 11);

});
