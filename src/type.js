//# type :: Any -> { namespace :: Maybe String, name :: String, version :: NonNegativeInteger }
//.
//. Returns the result of parsing the [type identifier][] of the given value.
//.
//. ```javascript
//. > S.type (S.Just (42))
//. {namespace: Just ('sanctuary-maybe'), name: 'Maybe', version: 1}
//.
//. > S.type ([1, 2, 3])
//. {namespace: Nothing, name: 'Array', version: 0}
//. ```

import * as $ from 'sanctuary-def';
import * as Maybe from 'sanctuary-maybe';
import {identifierOf, parseIdentifier} from 'sanctuary-type-identifiers';

export default $.def
  ('type')
  ({})
  ([$.Any,
    $.RecordType ({namespace: $.Maybe ($.String),
                   name: $.String,
                   version: $.NonNegativeInteger})])
  (x => {
     const {
       namespace,
       name,
       version,
     } = parseIdentifier (identifierOf (x));
     return {
       namespace: namespace == null ? Maybe.Nothing : Maybe.Just (namespace),
       name,
       version,
     };
   });
