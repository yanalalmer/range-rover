import { GlobalStyles } from './styles/globalStyles';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

      <div className='App'>this is my app now</div>
    </HelmetProvider>
  );
}

export default App;
