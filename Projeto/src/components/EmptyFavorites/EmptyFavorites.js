import React from 'react';
import { Link } from 'react-router-dom';
import { TiHeartOutline } from 'react-icons/ti';
import { Container } from './styles';

export default function EmptyFavorites() {
  return (
    <Container>
      <div className="content">
        <div>
          <TiHeartOutline size={100} />
          <strong>Você não tem Itens Favoritos!</strong>
          <br />
          <p>Adicione itens para visualizar os favoritos</p>
          <Link to="/">
            <button type="button">VOLTAR PARA A PÁGINA INICIAL</button>{' '}
          </Link>
        </div>
      </div>
    </Container>
  );
}
