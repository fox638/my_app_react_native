import React from 'react';
import * as S from './CharactersListScreen.styled';
import {CharacterCard} from '@entities/character';
import {useGetCharactersQuery} from './graphql';
import {FlatList} from 'react-native';

interface CharactersListScreenProps {}

export const CharactersListScreen: React.FC<
  CharactersListScreenProps
> = ({}) => {
  const {data, loading, error, fetchMore, variables} = useGetCharactersQuery({
    variables: {page: 1},
  });
  const characters = data?.characters?.results || [];

  console.log('data', data);
  const reload = () => {
    !loading &&
      fetchMore({
        variables: {page: data?.characters?.info?.next},
        updateQuery: (prev, {fetchMoreResult}) => ({
          characters: {
            ...prev.characters,
            info: fetchMoreResult?.characters?.info,
            results: [
              ...(prev?.characters?.results || []),
              ...(fetchMoreResult?.characters?.results || []),
            ],
          },
        }),
      });
  };

  return (
    <S.Container>
      <FlatList
        data={characters}
        keyExtractor={item => String(item?.image)}
        renderItem={({item}) => {
          return <CharacterCard character={item} />;
        }}
        onEndReached={reload}
      />
    </S.Container>
  );
};

export default CharactersListScreen;
