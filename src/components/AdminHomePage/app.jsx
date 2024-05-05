//eslint-disable perfectionist/sort-imports 
import './globals.css';

import { useScrollToTop } from './use-scroll-to-top';

import Router from './Routes/sections';
import ThemeProvider from './theme/index';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
