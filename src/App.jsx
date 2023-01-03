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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
