
import './App.scss';

import Nav from './component/ui/Organisms/header/Header';
import Carousel from './component/ui/Organisms/Carousel';
import Products from './component/ui/Organisms/Products';
import Footer from './component/ui/Organisms/Footer';

function App() {
 return (
    <div className="App">
      <Nav />
      <Carousel/>
      <Products/>
      <Footer/>

    </div>
  );
}

export default App;
