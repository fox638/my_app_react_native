import {CodegenConfig} from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
  schema: process.env.API_URL,
  documents: ['src/**/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/shared/types/gql/types.ts': {plugins: ['typescript']},
    './src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',

        baseTypesPath: './shared/types/gql/types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
  watch: true,
};

export default config;
