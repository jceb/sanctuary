'use strict';

const {deepStrictEqual: eq} = require ('assert');

const S = require ('..');


test ('add', () => {

  eq (String (S.add), 'add :: FiniteNumber -> FiniteNumber -> FiniteNumber');

  eq (S.add (1) (1), 2);
  eq (S.add (-1) (-1), -2);
  eq (S.add (1.5) (1), 2.5);
  eq (S.add (-1.5) (-1), -2.5);

});
