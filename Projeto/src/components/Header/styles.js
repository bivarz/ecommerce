import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  min-width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffff;
  top: 0px;
  border-bottom: 3px solid #f6f6f6;

  z-index: 1;

  button {
    border: 0;
    background: none;
    z-index: 2;
  }

  img {
    height: 30px;
    margin: 10px 30px;

    @media only screen and (max-width: 440px) {
      height: 30px;
      margin: 10px 2px;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Bag = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: center;
  }

  .bag_number span {
    position: relative;
    display: flex;
    top: 10px;
    right: 10px;
    line-height: 15px;
    height: 18px;
    padding: 0 5px;
    color: white;
    text-align: center;
    font-size: 10px;
    font-family: Poppins, sans-serif;
    align-items: center;
    border: 1.5px solid #fff;
    border-radius: 10px;
    background: #f33333;
    z-index: 2;
  }
`;
export const Search = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  text-decoration: none;
  margin-right: 7px;
`;

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: -6px;

  .bag_number_favorites span {
    position: relative;
    display: flex;
    top: 10px;
    right: 12px;
    line-height: 15px;
    height: 18px;
    padding: 0 4px;
    color: white;
    text-align: center;
    font-size: 10px;
    font-family: Poppins, sans-serif;
    align-items: center;
    border: 1.5px solid #fff;
    border-radius: 10px;
    background: #f33333;
  }
`;
