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
    <Home/>
  );
}

export default App;
