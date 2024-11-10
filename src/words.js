//# words :: String -> Array String
//.
//. Takes a string and returns the array of words the string contains
//. (words are delimited by whitespace characters).
//.
//. See also [`unwords`](#unwords).
//.
//. ```javascript
//. > S.words (' foo bar baz ')
//. ['foo', 'bar', 'baz']
//. ```

import * as $ from 'sanctuary-def';

export default $.def
  ('words')
  ({})
  ([$.String, $.Array ($.String)])
  (s => {
     const words = s.split (/\s+/);
     return words.slice (
       words[0] === '' ? 1 : 0,
       words[words.length - 1] === '' ? words.length - 1 : words.length
     );
   });
