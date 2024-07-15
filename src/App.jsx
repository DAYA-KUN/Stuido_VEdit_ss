import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects.jsx';
import Tutorial from './components/Tutorial.jsx';
import CreateVideo from './pages/CreateVideo.jsx';
function App() {
   return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/createVideo" element={<CreateVideo />} />
          </Routes>
      </Router>
  );
}

export default App;