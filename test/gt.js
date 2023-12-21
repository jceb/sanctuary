import {deepStrictEqual as eq} from 'assert';

import S from '../index.js';


test ('gt', () => {

  eq (String (S.gt), 'gt :: Ord a => a -> a -> Boolean');

  eq (S.filter (S.gt (3)) ([1, 2, 3, 4, 5]), [4, 5]);

});
