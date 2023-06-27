import './App.css';
import Header from './component/header';
import Contact from './component/contact';
import Technologies from './component/technologies';
import Footer from './component/footer';
import About from './component/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Technologies/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
