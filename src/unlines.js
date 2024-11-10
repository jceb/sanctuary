//# unlines :: Array String -> String
//.
//. Takes an array of lines and returns the result of joining the lines
//. after appending a terminating line feed (`'\n'`) to each.
//.
//. See also [`lines`](#lines).
//.
//. ```javascript
//. > S.unlines (['foo', 'bar', 'baz'])
//. 'foo\nbar\nbaz\n'
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('unlines')
  ({})
  ([$.Array ($.String), $.String])
  (xs => xs.reduce ((s, x) => s + x + '\n', ''));
