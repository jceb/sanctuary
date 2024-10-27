import {deepStrictEqual as eq} from 'node:assert';

import test from 'oletus';

import * as S from 'sanctuary';
import tail from 'sanctuary/tail';

import {Nil, Cons} from './internal/List.js';


test ('tail', () => {

  eq (S.tail === tail, true);
  eq (String (S.tail), 'tail :: (Applicative f, Foldable f, Monoid f) => f a -> Maybe (f a)');

  eq (S.tail ([]), S.Nothing);
  eq (S.tail (['foo']), S.Just ([]));
  eq (S.tail (['foo', 'bar']), S.Just (['bar']));
  eq (S.tail (['foo', 'bar', 'baz']), S.Just (['bar', 'baz']));

  eq (S.tail (Nil), S.Nothing);
  eq (S.tail (Cons ('foo') (Nil)), S.Just (Nil));
  eq (S.tail (Cons ('foo') (Cons ('bar') (Nil))), S.Just (Cons ('bar') (Nil)));
  eq (S.tail (Cons ('foo') (Cons ('bar') (Cons ('baz') (Nil)))), S.Just (Cons ('bar') (Cons ('baz') (Nil))));

});
