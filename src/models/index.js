// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TabB230215, TabA230215 } = initSchema(schema);

export {
  TabB230215,
  TabA230215
};