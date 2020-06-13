import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TiHeartOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Loading from '../../components/Loading';

import { Container, ProductList } from './styles';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return loading ? (
    <Loading />
  ) : (
      <Container>
        <ProductList>
          {products.map((product, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Link
                to={`products/${product.name} `}
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

              <p>{product.name}</p>

              <span>
                {product.discount_percentage ? (
                  <span className="discounted_price">{product.actual_price}</span>
                ) : null}
                {product.regular_price}
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

export default connect()(Home);
