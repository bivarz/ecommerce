import React from 'react';
import PropTypes from 'prop-types';

import { RiDeleteBin4Line } from 'react-icons/ri';
import { Container, Scroll, NotificationList, Notification } from './styles';

export default function SideDrawer({ open, onClose }) {
  return open ? (
    <Container onMouseLeave={onClose} onBlur={() => null}>
      <NotificationList>
        <div className="header_list">
          <strong>Sacola (02 items ) </strong>
          <strong>|</strong>
          <strong>Total: R$ 258,98</strong>
        </div>
        <Scroll>
          <Notification>
            <div className="notification_item">
              <thead>
                <tr>
                  <th>
                    <img
                      src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                      alt="foto"
                    />
                  </th>
                  <tr>
                    <div>
                      <span>VESTIDO TRANSPASSE BOW</span>
                    </div>
                  </tr>
                  <tr>
                    <div className="price">
                      <strong>R$129,90 </strong>
                      <p>3x R$39,90 </p>
                    </div>
                  </tr>
                </tr>
              </thead>
              <button type="button">
                <RiDeleteBin4Line size={15} />
              </button>
            </div>
          </Notification>
          <Notification>
            <div className="notification_item">
              <thead>
                <tr>
                  <th>
                    <img
                      src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                      alt="foto"
                    />
                  </th>
                  <tr>
                    <div>
                      <span>VESTIDO TRANSPASSE BOW</span>
                    </div>
                  </tr>
                  <tr>
                    <div className="price">
                      <strong>R$129,90 </strong>
                      <p>3x R$39,90 </p>
                    </div>
                  </tr>
                </tr>
              </thead>
              <button type="button">
                <RiDeleteBin4Line size={15} />
              </button>
            </div>
          </Notification>
          <Notification>
            <div className="notification_item">
              <thead>
                <tr>
                  <th>
                    <img
                      src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                      alt="foto"
                    />
                  </th>
                  <tr>
                    <div>
                      <span>VESTIDO TRANSPASSE BOW</span>
                    </div>
                  </tr>
                  <tr>
                    <div className="price">
                      <strong>R$129,90 </strong>
                      <p>3x R$39,90 </p>
                      <p>Qtd: 01 </p>
                    </div>
                  </tr>
                </tr>
              </thead>
              <button type="button">
                <RiDeleteBin4Line size={15} />
              </button>
            </div>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  ) : null;
}

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
