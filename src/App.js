import "./App.css";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Carrusel from "./componentes/Cuerpo/Carrusel";
import Productos from "./componentes/Productos/Productos";
import Contacto from "./componentes/Contacto/Contacto";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Nosotros from "./componentes/Nosotros/Nosotros";

function App() {
  return (
    <>
      <Header />
      <Carrusel />

      <Routes>
        <Route>
          <Route path="/"/>
          <Route exact path="Productos" element ={<Productos/>} />
          <Route exact path="Contacto" element ={<Contacto/>} />
          <Route exact path="Nosotros" element ={<Nosotros/>} />
          
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
