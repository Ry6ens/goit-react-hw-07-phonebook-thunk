import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container/Container";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/goit-react-hw-07-phonebook-thunk" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
