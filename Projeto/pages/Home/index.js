import React from 'react';
import { TiHeartOutline } from 'react-icons/ti';

import { Container, ProductList } from './styles';

export default function Home() {
  return (
    <Container>
      {/* TiHeartFullOutline */}
      <ProductList>
        <li>
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
            alt="Produto"
          />

          <p>Vestido Transpasse Bow</p>
          <span>R$ 129.99</span>
          <button type="button" className="button_heart">
            <TiHeartOutline size={24} />
          </button>
        </li>
        <li>
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578"
            alt="Produto"
          />
          <p>Vestido Transpasse Bow</p>
          <span>R$ 129.99</span>
          <button type="button" className="button_heart">
            <span>
              <TiHeartOutline size={24} />
            </span>
          </button>
        </li>
        <li>
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002584_035_catalog_1.jpg?1459947139"
            alt="Produto"
          />
          <p>Vestido Transpasse Bow</p>
          <span>R$ 129.99</span>
          <button type="button" className="button_heart">
            <TiHeartOutline size={24} />
          </button>
        </li>
        <li>
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002600_293_catalog_1.jpg?1460416037"
            alt="Produto"
          />
          <p>Vestido Transpasse Bow</p>
          <span>R$ 129.99</span>
          <button type="button" className="button_heart">
            <div>
              <TiHeartOutline size={24} />
            </div>
          </button>
        </li>
        <li>
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
            alt="Produto"
          />
          <p>Vestido Transpasse Bow</p>
          <span>R$ 129.99</span>
          <button type="button" className="button_heart">
            <TiHeartOutline size={24} />
          </button>
        </li>
      </ProductList>
    </Container>
  );
}
