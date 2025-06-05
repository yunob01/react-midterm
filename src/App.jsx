import { BrowserRouter, Routes, Route } from 'react-router';
import { Provider } from "react-redux";
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Product from '@/pages/Product';
import Culture from '@/pages/Culture';
import Login from './pages/Login';
import Register from '@/pages/Register';
import Profile from '@/pages/Profile';

import { persistor, store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/culture" element={<Culture />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/profile" element={<Profile />} />
              </Routes>
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>

      </Provider>
    </QueryClientProvider>
        );
}

export default App;

// import { feedProducts } from '@/api/fireStore';

// feedProducts();

// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/product/:productId" element={<Product />} />
//             <Route path="/culture" element={<Culture />} />
//           </Routes>
//         </BrowserRouter>
//       </PersistGate>
//     </Provider>
