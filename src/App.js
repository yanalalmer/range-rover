import { GlobalStyles } from './styles/globalStyles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
// pages
import { Home, Models, History, Store, Dealerships } from './pages';
// components
import { Navbar } from './components';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charset='utf-8' />
        <link rel='icon' href='favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta name='description' content='Explore the new Range Rover models' />
        <title>Range Rover</title>
      </Helmet>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/models' element={<Models />} />
        <Route path='/history' element={<History />} />
        <Route path='/store' element={<Store />} />
        <Route path='/dealerships' element={<Dealerships />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
