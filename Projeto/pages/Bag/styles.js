import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  align-items: center;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  min-width: 300px;
  max-width: 1280px;
  height: 100%;

  .container_top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    align-items: center;
    margin-bottom: 10px;
    font-size: 20px;
  }
  .st1 {
    margin-left: 10px;
  }

  .container_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(308px, 2fr));
    grid-gap: 15px;
    list-style: none;
  }
  .container_bag {
    margin-bottom: 2px;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    @media only screen and (max-width: 350px) {
      padding: 10px;
    }

    footer {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      strong {
        font-size: 18px;
      }
    }
    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }
      button {
        border: none;
        background: none;
        padding: 6px;
      }
    }
  }
  .content_resume {
    max-height: 300px;
    background: #d8d8d8;
    color: #fff;
    border-radius: 10px;
    padding: 20px;
    font-weight: bolder;
  }
  .resume {
    display: flex;
    justify-content: space-between;
    color: #34353f;
    margin: 20px;
    border-bottom: 1px solid #d9d9d9;

    strong {
      font-size: 18px;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const Valor = styled.div``;
