import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  min-width: 12px;
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
  align-items: center;

  @media only screen and (max-width: 320px) {
    max-width: 320px;
    display: flex;

    list-style: none;
  }
  > li {
    border-radius: 15px;
    width: 320px;
    display: flex;
    flex-direction: column;
    margin-right: 2px;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 2px 3px #f5f5f5;

    img {
      width: 100%;
    }
  }
  img {
    border-radius: 15px 15px 0px 0px;
    width: 320px;
    margin-top: 0px;
    justify-content: center;
    align-self: center;
    width: 100%;
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
  > strong {
    margin-left: 5px;
  }

  @media only screen and (max-width: 320px) {
    align-items: center;
    width: 100%;
  }

  .discount {
    display: flex;
    flex-direction: center;
    align-items: center;
    padding: 5px;
    margin-top: 0px;
    margin-left: 15px;
    position: absolute;
    width: 50px;
    height: 80px;
    background: black;

    p {
      align-items: center;
      font-size: 17px;
      text-align: center;
      color: white;
    }
  }
  .discounted_price {
    margin-right: 10px;
    font-size: 12px;
    color: red;
    text-decoration: line-through;
    font-weight: normal;
  }
  .button_heart {
    display: block;
    position: relative;
    background: none;
    border: none;
    bottom: 30px;
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
`;
