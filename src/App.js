import About from './components/About/About';
import Course from './components/Course/Course';
import Cta from './components/CTA/Cta';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Highlight from './components/Highlight/Highlight';
import Testimonial from './components/Testimonial/Testimonial';


function App() {
  return (
    <div>
        <Header></Header>
        <Highlight></Highlight>
        <About></About>
        <Course></Course>
        <Testimonial></Testimonial>
        <Cta></Cta>
        <Footer></Footer>
    </div>
  );
}

export default App;
