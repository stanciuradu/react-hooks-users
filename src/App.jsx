import styled from "styled-components";

export const AppContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  color: aqua;
  @media (max-width: 768px) {
    .App {
      display: flex;
      flex-direction: column;
    }
  }
`;
