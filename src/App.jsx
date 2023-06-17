import MainPage from "./pages/MainPage.jsx";
import SubscribedDesktop from "./pages/SubscribedDesktop.jsx";
import { Stack, Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Container>
      <Stack className="d-flex justify-content-center align-items-center vh-100">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/subscribed" element={<SubscribedDesktop />} />
          </Routes>
        </Router>
      </Stack>
    </Container>
  );
}
