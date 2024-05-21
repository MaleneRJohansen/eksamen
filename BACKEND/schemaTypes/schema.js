import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import { schemaTypes as customSchemaTypes } from './index';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(customSchemaTypes),
});

