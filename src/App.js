import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Nav from './Shared/Nav';


function App() {

  return (
    <div className="App">
      <Nav></Nav>

      <Routes>
     <Route path='/' element={<Homepage></Homepage>} ></Route>
    


      </Routes>

    </div>
  );
}

export default App;
