'use strict';

const {deepStrictEqual: eq} = require ('assert');

const S = require ('..');

const strMap = require ('./internal/strMap');


test ('values', () => {

  eq (String (S.values), 'values :: StrMap a -> Array a');

  eq (S.sort (S.values ({})), []);
  eq (S.sort (S.values ({a: 1, b: 2, c: 3})), [1, 2, 3]);

  eq (S.values (strMap), ['enumerable own property']);

});
