import {deepStrictEqual as eq} from 'assert';

import S from '../index.js';


test ('not', () => {

  eq (String (S.not), 'not :: Boolean -> Boolean');

  eq (S.not (false), true);
  eq (S.not (true), false);

});
