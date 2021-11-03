import Calculator from "./components/Calculator";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
