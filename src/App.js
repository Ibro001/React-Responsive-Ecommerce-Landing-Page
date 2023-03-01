import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/header/Header';
import Hero from './component/Hero/Hero'
import Products from './component/Products/Products';
import Slider from './component/Slider/Slider';
import Testimonials from './component/Testimonials/Testimonials';
import Virtual from './component/Virtual/Virtual';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
