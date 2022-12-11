import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience'
import Service from './components/Service/Service';
// import Testimonials from './components/Testimonials/Testimonials';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Service></Service>
      <Portfolio></Portfolio>
      {/* <Testimonials></Testimonials> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
