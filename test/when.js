'use strict';

const {deepStrictEqual: eq} = require ('assert');

const S = require ('..');


test ('when', () => {

  eq (String (S.when), 'when :: (a -> Boolean) -> (a -> a) -> a -> a');

  eq (S.when (S.gte (0)) (Math.sqrt) (16), 4);
  eq (S.when (S.gte (0)) (Math.sqrt) (-1), -1);

});
