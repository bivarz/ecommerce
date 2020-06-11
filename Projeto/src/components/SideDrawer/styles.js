import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: -1;

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
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px 0px 6px 6px;
  width: 320px;
  height: 400px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

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
    margin-top: 10px;
    justify-content: center;
    width: 100%;
  }
`;
export const Notification = styled.div`
  color: #fff;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  strong {
    font-size: 13px;
    line-height: 18px;
  }
  p {
    font-size: 12px;
    line-height: 18px;
    opacity: 0.6;
  }
`;
