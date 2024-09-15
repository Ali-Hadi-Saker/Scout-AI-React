import Home from './pages/Home';
import Login from './pages/Login';
import './styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
