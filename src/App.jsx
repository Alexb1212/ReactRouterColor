import { Routes, Route } from 'react-router-dom';

import Blue from './Blue.jsx';
import Red from './Red.jsx';
import NavBar from './NavBar.jsx'


const App = () => {

  return (
    <>
      <div id="container">
        <NavBar/>
        <h1>Hello React Router!</h1>
        
        <div id="main-section">
          <Routes>
            <Route path="/" element={<h2>This the home page where you get to choose the color that you want!</h2>}/>
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
