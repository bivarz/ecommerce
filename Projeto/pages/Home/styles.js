import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  max-width: 1280px;

  @media only screen and (max-width: 910px) {
    display: block;
    margin-top: 80px;
    align-content: center;
    align-items: center;
    margin-left: 20px;
  }
  @media only screen and (max-width: 629px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin: 80px auto auto;
    width: 100%;

    min-width: 320px;
  }
`;
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(308px, 1fr));
  grid-gap: 15px;
  list-style: none;

  li {
    width: 320px;
    display: flex;
    flex-direction: column;
    margin-right: 2px;

    @media only screen and (max-width: 320px) {
      width: 320px;
    }
    img {
      width: 320px;
      margin-top: 0px;
      align-self: center;
      min-width: 100px;
      max-width: 320px;
    }
    > p {
      font-size: 16px;
      line-height: 20px;
      color: gray;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      color: #000;
    }
    > button {
      width: 24px;
    }

    .button_heart {
      display: block;
      position: relative;
      background: none;
      border: none;
      bottom: 70px;
      line-height: 15px;
      height: 16px;
      margin-right: 100px;
      margin-left: 280px;
      color: gray;
      align-items: center;

      svg:hover {
        color: red;
      }
    }
  }
`;
