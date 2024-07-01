import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Services from './components/Services';


const App = () => {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
          <Header />
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Contact />
          <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
