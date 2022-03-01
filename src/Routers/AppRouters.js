import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from '../Components/Footer';
import Login from '../Components/Login';
import MenuNavegacion from '../Components/MenuNavegacion';
import Plato from '../Components/Plato';
import Registro from '../Components/Registro';
import Video from '../Components/Video'



const AppRoutes = () => {
  return (
      <div>
        <Router >
            <MenuNavegacion />
            <Video/>
                <Routes >
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
                <Route path="/Plato" element={<Plato />} />
                </Routes>
        </Router>
        <Footer/>
      </div>

  )
};

export default AppRoutes;