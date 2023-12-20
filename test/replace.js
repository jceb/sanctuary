'use strict';

const {deepStrictEqual: eq} = require ('assert');

const S = require ('..');


test ('replace', () => {

  eq (String (S.replace), 'replace :: (Array (Maybe String) -> String) -> RegExp -> String -> String');

  eq (S.replace (([$1]) => S.maybe ('') (S.toUpper) ($1)) (/(\w)/) ('foo'), 'Foo');
  eq (S.replace (([$1]) => S.maybe ('') (S.toUpper) ($1)) (/(\w)/g) ('foo'), 'FOO');
  eq (S.replace (S.show) (/(foo)(bar)?/) ('<>'), '<>');
  eq (S.replace (S.show) (/(foo)(bar)?/) ('<foo>'), '<[Just ("foo"), Nothing]>');
  eq (S.replace (S.show) (/(foo)(bar)?/) ('<foobar>'), '<[Just ("foo"), Just ("bar")]>');
  eq (S.replace (S.show) (/@(?<username>[-\w]+)/) ('@sanctuary-js'), '[Just ("sanctuary-js")]');

});
