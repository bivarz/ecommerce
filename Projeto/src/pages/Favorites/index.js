import React from 'react';
import { Container } from './styles';
import EmptyFavorites from '../../components/EmptyFavorites/EmptyFavorites';

export default function Favorites() {
  return (
    <Container>
      <div>
        <EmptyFavorites />
      </div>
    </Container>
  );
}
