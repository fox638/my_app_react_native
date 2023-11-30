import {useRef, useState} from 'react';
import {useGetCharactersQuery} from '../graphql';
import useEvent from '@shared/lib/hook/useEvent';

export function useCharactersList() {
  const {current} = useRef({fetchMore: false});
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const {data, loading, fetchMore, refetch, error} = useGetCharactersQuery({
    variables: {page: 1},
  });

  const handleRefresh = useEvent(() => {
    refetch();
  });

  const handleLoadMore = useEvent(() => {
    if (!current.fetchMore && hasNextPage) {
      setFetchMoreLoading(true);
      current.fetchMore = true;
      fetchMore({
        variables: {page: data?.characters?.info?.next},
        updateQuery: (prev, {fetchMoreResult}) => {
          if (
            prev.characters?.info?.next ===
            fetchMoreResult?.characters?.info?.next
          ) {
            return prev;
          }
          return {
            characters: {
              ...prev.characters,
              info: fetchMoreResult?.characters?.info,
              results: [
                ...(prev?.characters?.results || []),
                ...(fetchMoreResult?.characters?.results || []),
              ],
            },
          };
        },
      }).finally(() => {
        current.fetchMore = false;
        setFetchMoreLoading(false);
      });
    }
  });

  const hasNextPage = data?.characters?.info?.next !== null;
  const characters = data?.characters?.results || [];

  return {
    loading,
    fetchMoreLoading,
    characters,
    hasNextPage,
    error,
    handleRefresh,
    handleLoadMore,
  };
}
