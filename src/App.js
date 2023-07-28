import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CompletePartner from "./pages/CompleteParnter";
import CompleteAlt from "./pages/CompleteAlt";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="main-content">
          <Routes>
            <Route path="/" element={<CompletePartner />} />
            <Route path="/complete-alt" element={<CompleteAlt />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/payment-failure" element={<PaymentFailure />} />
          </Routes>
        </section>
      </main>

      {/* Popup */}
    </div>
  );
}

export default App;
