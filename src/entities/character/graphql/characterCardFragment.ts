import {graphql} from '@shared/api/gql';

export const CharacterCardFragment = graphql(/* GraphQL */ `
  fragment CharacterCard on Character {
    id
    name
    image
    created
  }
`);
