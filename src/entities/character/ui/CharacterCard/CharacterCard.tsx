import React from 'react';

import * as S from './CharacterCard.styled';
import FastImage from 'react-native-fast-image';
import {Typography} from '@shared/ui/Typography';
import format from 'date-fns/format';
import {CharacterCardFragment} from '../../graphql';

interface CharacterCardProps {
  character: CharacterCardFragment;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
  return (
    <S.Container>
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
        {character.created && format(new Date(character.created), 'dd.MM.yyyy')}
      </Typography>
    </S.Container>
  );
};

export default CharacterCard;
