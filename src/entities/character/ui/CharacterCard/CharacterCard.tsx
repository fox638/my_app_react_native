import React from 'react';
import format from 'date-fns/format';
import FastImage from 'react-native-fast-image';
import type {CharacterCardFragment} from '../../graphql';
import {Typography} from '@shared/ui/Typography';
import * as S from './CharacterCard.styled';

interface CharacterCardProps {
  character: CharacterCardFragment;
  onPress?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = React.memo(
  ({character, onPress}) => {
    return (
      <S.Container onPress={onPress}>
        <S.AvatarContainer>
          {character.image && (
            <S.Avatar
              source={{uri: character.image}}
              resizeMode={FastImage.resizeMode.cover}
            />
          )}
        </S.AvatarContainer>
        <Typography variant="h2" ellipsizeMode="tail">
          {character.name}
        </Typography>

        <Typography>
          {character.created &&
            format(new Date(character.created), 'dd.MM.yyyy')}
        </Typography>
      </S.Container>
    );
  },
  ({character: prevCharacter}, {character: nextCharacter}) =>
    prevCharacter.id === nextCharacter.id,
);

export default CharacterCard;
