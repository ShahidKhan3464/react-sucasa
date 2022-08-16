import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Standard from './components/standard/Standard';
import Rooms from './components/suggested-rooms/Rooms';
import Discover from './components/discover/Discover';
import Hotels from './components/luxury-hotels/Hotels';
import Popular from './components/popular-hotels/Popular';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Standard />
      <Rooms />
      <Discover />
      <Hotels />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;