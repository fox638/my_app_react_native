import React from 'react';
import * as S from './CharactersListScreen.styled';
import {CharacterCard, useCharactersList} from '@entities/character';
import {FlatList} from 'react-native';
import {EndList, ItemsLoading, ScreenSkeleton} from './ui';

interface CharactersListScreenProps {}

export const CharactersListScreen: React.FC<
  CharactersListScreenProps
> = ({}) => {
  const {
    loading,
    fetchMoreLoading,
    handleLoadMore,
    handleRefresh,
    characters,
    hasNextPage,
  } = useCharactersList();

  if (loading) {
    return <ScreenSkeleton />;
  }

  return (
    <S.Container>
      <FlatList
        data={characters}
        keyExtractor={item => String(item?.id)}
        renderItem={({item}) => {
          return item ? <CharacterCard character={item} /> : null;
        }}
        onEndReached={handleLoadMore}
        refreshing={loading || fetchMoreLoading}
        onRefresh={handleRefresh}
        ListFooterComponent={hasNextPage ? <ItemsLoading /> : <EndList />}
      />
    </S.Container>
  );
};

export default CharactersListScreen;
