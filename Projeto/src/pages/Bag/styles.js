import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  align-items: center;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  min-width: 300px;
  max-width: 1280px;
  height: 100%;

  .container_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 2fr));
    grid-gap: 15px;
    list-style: none;
  }
  .container_bag {
    margin-bottom: 5px;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #f3f3f3;
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
    max-height: 420px;
    background: #f2f2f2;
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
    margin-bottom: 50px;
    border-bottom: 3px solid #d9d9d9;
    padding: 2px;
  }

  .resume-1 {
    padding: 20px;
    width: 100%;
    border: none;
    text-align: center;
    font-weight: bolder;
    background: #50bf5b;
    display: flex;
    justify-content: center;
    color: #ffff;
    margin-bottom: 15px;
    transition: 0.9s;

    :hover {
      background: #009f5b;
    }
  }

  strong {
    font-size: 18px;
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

export const Button = styled(Link)`
  .resume-2 {
    padding: 20px;
    width: 100%;
    border: 1.5px solid #ce0d5a;
    text-align: center;
    font-weight: bolder;
    background: none;
    display: flex;
    justify-content: center;
    color: #ce0d5a;
    margin-bottom: 5px;
    text-decoration: none;
  }
`;
