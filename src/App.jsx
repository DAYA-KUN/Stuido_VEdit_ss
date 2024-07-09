import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects.jsx';
import Tutorial from './components/Tutorial.jsx';
function App() {
   return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tutorial" element={<Tutorial />} />
          </Routes>
      </Router>
  );
}

export default App;