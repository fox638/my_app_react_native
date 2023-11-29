import {graphql} from '@shared/api/gql';

export const CharactersQuery = graphql(/* GraphQL */ `
  query getCharacters {
    characters {
      results {
        id
        name
        image
        created
      }
    }
  }
`);
