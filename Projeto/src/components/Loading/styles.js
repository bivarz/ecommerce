import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -75px;
  display: flex;
  align-items: center;
  width: 100%;

  min-height: 100vh;
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
  }
`;
