import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './projects/pages/Home';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/myportfolio" element={<Home />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
