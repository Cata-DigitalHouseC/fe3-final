
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import { Routes, Route} from "react-router-dom";
import {routes} from './routes.jsx'
import DetDentista from "./Pages/DetDentista";
import Destacados from "./Pages/Destacados";
import Contacto from "./Pages/Contacto";
import Home from "./Pages/Home";
import { useGlobalContext } from "./Components/utils/global.context";



function App() {
  
  return (
      <div className="App">
          <Navbar/>

            <Routes>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.detalleDentista} element={<DetDentista/>}/>
                <Route path={routes.destacados} element={<Destacados/>}/>
                <Route path={routes.contacto} element={<Contacto/>}/>
            </Routes>

          <Footer/>
      </div>
  );
}

export default App;
