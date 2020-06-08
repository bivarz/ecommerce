/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable } from './styles';

export default function Cart() {
  return (
    <Container>
      {/* top resumo */}
      <div className="container_top">
        <strong>Minha Sacola</strong>
        <strong className="st1">Resumo</strong>
      </div>
      <div className="container_grid">
        {/* list */}
        <div>
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
        </div>

        {/* Resumo */}
        <div className="content_resume">
          <div clasName="content_data">
            <div className="resume">
              <span>Subtotal (01 itens) </span>
              <strong> R$ 129.99</strong>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
