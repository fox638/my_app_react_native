import React from 'react';
import * as S from './CharactersListScreen.styled';
import {CharacterCard} from '@entities/character';
import {useGetCharactersQuery} from './graphql';

interface CharactersListScreenProps {}

export const CharactersListScreen: React.FC<
  CharactersListScreenProps
> = ({}) => {
  const {data} = useGetCharactersQuery();
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
