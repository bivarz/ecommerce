import React, { useState, useEffect } from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const indisponivel =
    'https://fashionista-leovictorcvo.netlify.app/img/no-image.png';

  useEffect(() => {
    async function getData() {
      const response = await api.get('');
      setProducts(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <ProductList>
        {products.map((product) => (
          <li>
            <Link
              to={`products/${product.name} `}
              style={{ textDecoration: 'none' }}
            >
              <img
                src={product.image ? product.image : indisponivel}
                alt={product.name}
              />
            </Link>
            <p>{product.name}</p>
            <span>{product.regular_price}</span>
            <button type="button" className="button_heart">
              <TiHeartOutline size={24} />
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}
