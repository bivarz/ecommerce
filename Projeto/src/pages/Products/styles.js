import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 0px;
  display: block;
  align-items: center;
  justify-content: center;

  height: 100%;
  min-height: 76.5vh;
  min-width: 320px;
  max-width: 1280px;

  img {
    max-height: 490px;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(365px, 2fr));
    grid-gap: 10px;
    list-style: none;

    .adicionar {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;

      @media only screen and (max-width: 755px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .image {
      margin-right: auto;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: center;
    }
  }

  strong {
    font-size: 20px;
    margin-right: 10px;
  }

  P {
    font-size: 15px;
    font-weight: bold;
    color: #999;
  }

  .valores {
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
  }
  .tamanho {
    align-items: baseline;
    margin-bottom: 10px;
  }
  .tam-button {
    margin-left: 5px;
    margin-bottom: 10px;
    background: none;
    border: 1.4px solid #999;
    border-radius: 5px;
    padding: 10px;
  }

  button {
    width: 350px;
    margin-top: 10px;
    padding: 10px;
    background: black;
    color: #fff;
    font-weight: bolder;
    border: none;
    border-radius: 10px;
  }
`;
