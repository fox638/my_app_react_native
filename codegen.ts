import {CodegenConfig} from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/shared/api/gql/': {
      preset: 'client',
    },
  },
  watch: true,
};

export default config;
