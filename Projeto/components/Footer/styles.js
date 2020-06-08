import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 40px;
  position: relative;
  min-width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d1d1d1;
  border-top: 4px solid #f6f6f6;

  @media only screen and (min-height: 1000px) {
    position: absolute;
    bottom: 0px;
  }

  @media only screen and (min-height: 1000px) {
    position: relative;
  }

  button {
    border: 0;
    background: none;
  }

  img {
    height: 10px;
    margin: 10px 20px;

    @media only screen and (max-width: 440px) {
      height: 10px;
      margin: 10px 2px;
    }
  }
  .footer_description {
    align-items: center;
    font-size: 10px;
  }
  .links {
    display: flex;
    margin-right: 10px;
    justify-content: space-between;
    align-items: baseline;

    a {
      margin-right: 5px;
      color: black;
    }
    a:visited {
      color: black;
    }
  }
`;
