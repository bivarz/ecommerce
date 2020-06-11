import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function EmptyFavorites() {
  return (
    <Container>
      <div className="content">
        <div>
          <div className="image">
            <img
              src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
              alt="Produto"
            />
          </div>
        </div>
        <div className="adicionar">
          <strong>Vestido Transstrongasse Bow </strong>
          <br />
          <div className="valores">
            <strong>R$ 149,90 </strong>
            <p> 3x de 49,99</p>
          </div>
          <div className="tamanho">
            <span className="tam-button">P</span>
            <span className="tam-button">G</span>
            <span className="tam-button">GG</span>
          </div>

          <Link to="/">
            <button type="button">Adicionar à Sacola</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
