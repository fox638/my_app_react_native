import * as Types from '../../../shared/types/gql/types';

import { gql } from '@apollo/client';
export type CharacterCardFragment = { __typename?: 'Character', id?: string | null, name?: string | null, image?: string | null, created?: string | null };

export const CharacterCardFragmentDoc = gql`
    fragment CharacterCard on Character {
  id
  name
  image
  created
}
    `;