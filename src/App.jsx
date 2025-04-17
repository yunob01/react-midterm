import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from "react-redux";

import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Product from '@/pages/Product';
import Culture from '@/pages/Culture';
import Contact from '@/pages/Contact';

import store from '@/redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
