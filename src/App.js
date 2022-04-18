 import React, { useContext } from 'react';
import About from './componets/About';
import Navbar from './componets/Navbar'
import ProductList from './componets/ProductList';
import Contact from './componets/Contact';
import Toggle from './componets/Toggle';
import { ThemeContext } from './Context';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle />
      <Navbar />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
