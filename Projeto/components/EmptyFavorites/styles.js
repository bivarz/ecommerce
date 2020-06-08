import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 93vh;
  width: 100%;
  min-width: 320px;
  max-width: 1280px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    strong {
      font-size: 20px;
    }

    svg {
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
    }

    button {
      margin-top: 10px;
      padding: 20px;
      background: none;
      color: #ce0d5a;
      font-weight: bolder;
      border: 1.5px solid #ce0d5a;
    }
  }
`;
