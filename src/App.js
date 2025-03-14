import React,{useState} from 'react';
import './App.css';
// import Navbar from './Components/Home/Navbar';
import HeroHeader from './Components/Home/HeroHeader';
import Cards from './Components/Home/Cards';
import EmailArea from './Components/EmailArea';
import CardsLower from './Components/Home/CardsLower';
import PagesNumbers from './Components/PagesNumbers';
// import FooterSection from './Components/Footer/FooterSection';
import MobileNav from './Components/Home/MobileNavbar';



function App() {
const  [query,setQuery]=useState('')
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
        <HeroHeader />
        <Cards query={query}
        />
        <EmailArea query={query} setQuery={setQuery} />
        <CardsLower query={query} />
        <PagesNumbers />
        {/* <FooterSection /> */}
        <MobileNav/>
      </header>
    </div>

  );
}

export default App;
