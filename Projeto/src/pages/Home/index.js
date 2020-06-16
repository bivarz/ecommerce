import React, { useState, useEffect } from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loading';

import { Container, ProductList } from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const indisponivel =
    'https://fashionista-leovictorcvo.netlify.app/img/no-image.png';

  useEffect(() => {
    async function getData() {
      const response = await api.get('');
      setProducts(response.data);
      setLoading(false);
    }
    getData();
  }, []);

  if (loading === true) return <Loading />;

  return (
    <Container>
      <ProductList>
        {products.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <Link
              to={`products/${product.style} `}
              style={{ textDecoration: 'none' }}
            >
              {product.on_sale ? (
                <span className="discount">
                  <p>-{product.discount_percentage}</p>
                </span>
              ) : null}
              <img
                src={product.image ? product.image : indisponivel}
                alt={product.name}
              />
            </Link>
            <p className="name">{product.name}</p>
            <span>
              {product.discount_percentage ? (
                <span className="discounted_price">
                  {product.regular_price}
                </span>
              ) : null}
              <strong>{product.actual_price}</strong>
            </span>
            <button type="button" className="button_heart">
              <TiHeartOutline size={24} />
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}

export default Home;
