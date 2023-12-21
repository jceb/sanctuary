import {deepStrictEqual as eq} from 'assert';

import S from '../index.js';


test ('joinWith', () => {

  eq (String (S.joinWith), 'joinWith :: String -> Array String -> String');

  eq (S.joinWith ('') (['a', 'b', 'c']), 'abc');
  eq (S.joinWith (':') ([]), '');
  eq (S.joinWith (':') (['']), '');
  eq (S.joinWith (':') (['', '']), ':');
  eq (S.joinWith (':') (['', 'foo', '']), ':foo:');
  eq (S.joinWith (':') (['foo', 'bar', 'baz']), 'foo:bar:baz');
  eq (S.joinWith ('::') (['foo', 'bar', 'baz']), 'foo::bar::baz');

});
