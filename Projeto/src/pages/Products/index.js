import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import getProductId from '../../utils/getProductId';
import { Container } from './styles';

function Products({ match }) {
  const [product, setProduct] = useState([]);
  const params = match.params.styles;

  useEffect = (() => {


  }[params])

  const dispatch = useDispatch();
  function addToBag() {
    dispatch({ type: 'ADD_TO_BAG' });
  }

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

          <button type="button" onClick={() => addToBag}>
            Adicionar à Sacola
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Products;

Products.propTypes = {
  match: PropTypes.number.isRequired,
};
