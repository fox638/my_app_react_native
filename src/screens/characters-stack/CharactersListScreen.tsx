import React from 'react';
import * as S from './CharactersListScreen.styled';
import {useQuery} from '@apollo/client';
import {CharactersQuery} from './graphql';
import {CharacterCard} from '@entities/character';

interface CharactersListScreenProps {}

export const CharactersListScreen: React.FC<
  CharactersListScreenProps
> = ({}) => {
  const {data} = useQuery(CharactersQuery);
  const characters = data?.characters?.results || [];
  console.log('characters', characters);
  return (
    <S.Container>
      {characters.map(item => {
        if (!item) {
          return null;
        }
        return <CharacterCard key={item.id} character={item} />;
      })}
    </S.Container>
  );
};

export default CharactersListScreen;
