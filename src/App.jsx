import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from "react-redux";

import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Product from '@/pages/Product';
import Culture from '@/pages/Culture';

import { persistor, store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

// import { feedProducts } from '@/api/fireStore';

// feedProducts();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/culture" element={<Culture />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
