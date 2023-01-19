import 'react-bootstrap'
import About from './components/About';
import Banner from './components/Banner';
import Collections from './components/Collections';
import FAQ from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header'
import HowItWork from './components/HowItWork';
import Mlnt from './components/Mlnt';
import RoadMap from './components/RoadMap';
import Team from './components/Team';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MintPage from './components/MintPage';

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <HowItWork />
      <Collections />
      <Mlnt />
      <RoadMap />
      <Team />
      <FAQ />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/mint-page">Mint Page</Link>
        </nav>
        
      </div> */}
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mint-page">Books</Link></li>
        </ul>
      </nav> */}
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mint-page" element={<MintPage/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
