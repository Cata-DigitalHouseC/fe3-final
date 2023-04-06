
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {routes} from './routes.jsx'
import DetDentista from "./Pages/DetDentista";
import Destacados from "./Pages/Destacados";
import Contacto from "./Pages/Contacto";
import Home from "./Pages/Home";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.detalleDentista} element={<DetDentista/>}/>
                <Route path={routes.destacados} element={<Destacados/>}/>
                <Route path={routes.contacto} element={<Contacto/>}/>
            </Routes>
          </BrowserRouter>
          <Footer/>
      </div>
  );
}

export default App;
