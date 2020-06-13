/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Button } from './styles';

export default function Cart() {
  return (
    <Container>
      {/* top resumo */}
      <div className="container_top" />
      <div className="container_grid">
        {/* list */}
        <div>
          <strong>Minha Sacola</strong>
          <div className="container_bag">
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th>Produto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                      alt="Produto"
                    />
                  </td>
                  <td>
                    <strong>VESTIDO TRANSPASSE BOW</strong>
                    <p>Cor: Marrom</p>
                    <span>R$ 129.99</span>
                  </td>
                  <td />
                  <td>
                    <div>
                      <button type="button">
                        <MdDelete size={20} color="#999" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </ProductTable>
            <footer>
              <div>
                <span>Quantidade: </span>
                <button type="button">
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
              <strong>R$ 129.99</strong>
            </footer>
          </div>
          {/* fim item */}

          {/* fim item */}
        </div>

        {/* Resumo */}
        <div>
          <strong className="st1">Resumo</strong>
          <div className="content_resume">
            <div className="content_data">
              <div className="resume">
                <span>Subtotal (02 un) </span>
                <strong> R$ 258.98</strong>
              </div>
              <div className="resume">
                <span>Descontos </span>
                <strong> R$ 0.00</strong>
              </div>
              <div className="resume">
                <span>Valor Total </span>
                <strong> R$ 258.98</strong>
              </div>
              <div>
                <button type="button" className="resume-1">
                  FINALIZAR COMPRA
                </button>

                <Button style={{ textDecoration: 'none' }} to="/">
                  <button type="button" className="resume-2">
                    ESCOLHER MAIS PRODUTOS
                  </button>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
