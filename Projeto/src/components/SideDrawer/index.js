import React from 'react';

import { RiDeleteBin4Line, RiCloseCircleLine } from 'react-icons/ri';
import { Container, Notification, NotificationList } from './styles';
import { useClose } from '../../context/Close';

export default function SideDrawer() {
  const { setActive } = useClose();
  return (
    <Container onMouseLeave={setActive(false)}>
      <NotificationList>
        <button type="button">
          <RiCloseCircleLine size={20} />
        </button>

        <div className="header_list">
          <strong>Sacola(02 items ) - R$ 258,98</strong>
        </div>
        <Notification>
          <div>
            <div>
              <img
                src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002581_614_catalog_1.jpg?1459536611"
                alt=""
              />
            </div>
            <strong>Title</strong>
            <strong>R$129,90 </strong>
            <p>3x R$ 39,97</p>

            <button type="button">
              <RiDeleteBin4Line size={13} />
            </button>
          </div>
        </Notification>
      </NotificationList>
    </Container>
  );
}
