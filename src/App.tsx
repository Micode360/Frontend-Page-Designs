import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import DesignI from "./template/designi";

const App = () => {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designi" element={<DesignI />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
