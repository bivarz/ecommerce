import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Container } from './styles';

export default function EmptyBag() {
  return (
    <Container>
      <div className="content">
        <div>
          <RiShoppingBagLine size={100} />
          <strong>Sua Sacola está vazia!</strong>
          <br />
          <p>Adicione itens para visualizar os pedidos</p>
          <Link to="/">
            <button type="button">VOLTAR PARA A PÁGINA INICIAL</button>{' '}
          </Link>
        </div>
      </div>
    </Container>
  );
}
