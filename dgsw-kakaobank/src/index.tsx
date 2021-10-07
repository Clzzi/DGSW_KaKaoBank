import 'styles/font.css';
import { RecoilRoot } from 'recoil';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProviderContainer from 'ThemeProviderContainer';

ReactDOM.render(
  <RecoilRoot>
    <StrictMode>
      <BrowserRouter>
      {/* Suspense, Toast, ScrollTop */}
        <ThemeProviderContainer />
      </BrowserRouter>
    </StrictMode>
  </RecoilRoot>,
  document.getElementById('root'),
);
