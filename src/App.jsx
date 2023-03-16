import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Work";
import Contact from "./components/Contact";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  color: white;
  background: url("./img/bg.jpeg");
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Work/>
      <Contact/>
    </Container>
  )
}

export default App;
