import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
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
