//# unwords :: Array String -> String
//.
//. Takes an array of words and returns the result of joining the words
//. with separating spaces.
//.
//. See also [`words`](#words).
//.
//. ```javascript
//. > S.unwords (['foo', 'bar', 'baz'])
//. 'foo bar baz'
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('unwords')
  ({})
  ([$.Array ($.String), $.String])
  (words => words.join (' '));
