//# stripSuffix :: String -> String -> Maybe String
//.
//. Returns Just the portion of the given string (the second argument) left
//. after removing the given suffix (the first argument) if the string ends
//. with the suffix; Nothing otherwise.
//.
//. See also [`stripPrefix`](#stripPrefix).
//.
//. ```javascript
//. > S.stripSuffix ('.md') ('README.md')
//. Just ('README')
//.
//. > S.stripSuffix ('.md') ('README')
//. Nothing
//. ```

import * as $ from 'sanctuary-def';
import Maybe from 'sanctuary-maybe';

export default $.def
  ('stripSuffix')
  ({})
  ([$.String, $.String, $.Maybe ($.String)])
  (suffix => s =>
     s.endsWith (suffix) ?
     Maybe.Just (s.slice (0, s.length - suffix.length)) :
     Maybe.Nothing);
