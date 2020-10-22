/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { IntlProvider } from 'react-intl';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Service from './components/Service/Service';
import Technology from './components/Technology/Technology';
import Client from './components/Client/Client';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import CompanyInfo from './components/CompanyInfo/CompanyInfo';
import Footer from './components/Footer/Footer';
import Parallax from './components/Parallax/Parallax';
import data from './data.json';

class App extends React.Component {
  render() {
    return (
      <IntlProvider locale="en" messages={data}>
        <div>
          <Home />
          <Navbar />
          <Parallax bg="./images/spider-office-1.jpg" />
          <About />
          <Parallax bg="./images/spider-office-2.jpg" />
          <Service />
          <Parallax bg="./images/spider-office-3.jpg" />
          <Technology />
          <Parallax bg="./images/spider-office-4.jpg" />
          <Client />
          <Parallax bg="./images/spider-office-5.jpg" />
          <Career />
          <Parallax bg="./images/spider-office-6.jpg" />
          <Contact />
          <Parallax bg="./images/spider-office-7.jpg" />
          <CompanyInfo />
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
