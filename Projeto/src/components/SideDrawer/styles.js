import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: calc(100% - 30px);
    top: -20px;
    left: calc(10% - 70px);
    border-left: 60px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 460px solid transparent;
  }
`;

export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: calc(10% - 350px);
  top: calc(100% + 40px);
  background: #999;
  border-radius: 8px 0px 8px 8px;
  width: 320px;

  padding: 3px 6px;

  &::before {
    content: '';
    position: absolute;
    left: calc(100% - 30px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.4);
  }
  .header_list {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    color: #fff;
    width: 100%;
  }

  .notification_item {
    margin-left: -50px;
    justify-content: center;
    width: 100%;

    .image {
      background: yellow;
    }
  }
`;
export const Scroll = styled(PerfectScrollbar)`
  flex-direction: column;
  max-height: 400px;
  padding: 5px 5px;
`;

export const Notification = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #fff;
  margin: 0px;

  width: 280px;

  & + div {
    margin-top: 15px;
    margin-left: 0px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  img {
    min-height: 100px;
  }

  strong {
    margin-top: 20px;
    padding-top: 20px;
    font-size: 18px;
    line-height: 18px;
  }
  span {
    color: black;
    font-weight: bold;
    padding-top: 10px;
    font-size: 12px;
    margin-bottom: 10px;
  }
  p {
    align-items: baseline;
    margin-top: 2px;
    font-size: 10px;
  }

  .price {
    display: block;
  }
`;
