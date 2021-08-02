import styled from "styled-components";

 export const Script = ({children, rotate}: any) => {
  return <Container rota={rotate}>{children}</Container>;
};

const Container = styled.div<any>`
  font-family: var(--font-script);
  transform: ${props => `rotate(${props.rota}deg)`};
  display: grid;
  background-color: #fcfaf7;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.05), 1px 1px 3px rgba(0,0,0,0.05);
  max-width: 600px;
  width: 80vw;
  padding: 120px 64px;

  div.indent{
    padding:0 10% 0 20%;
    margin-bottom: 32px;
    h4{
      text-transform: uppercase;
      text-align: center;
      font-weight: 400;
      margin-bottom: 8px;
    }
  }
`;


