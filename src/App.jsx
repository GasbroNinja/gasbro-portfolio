import React from 'react';
import useLocalStorage from "use-local-storage";
import Header from './components/header/Header';
import MyNav from './components/MyNav/MyNav';
import About from './components/aboutMe/About';
import Experience from './components/experience/Experience';
//import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {

    const [theme, setTheme] = useLocalStorage("theme" ? "light" : "dark");

    const switchTheme = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    };

  return (
    <div className='body__bg-color' data-theme={theme}>
      <div class="checkboxes__item">
        <label class="checkbox style-h">
          <input type="checkbox" onClick={switchTheme} />
          <div class="checkbox__checkmark"></div>
          <div class="checkbox__body">{theme} Mode</div>
        </label>
      </div>
      <Header />
      <MyNav />
      <About />
      <Experience />
      {/*<Services /> temporarily DISABLED*/}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App