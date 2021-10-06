import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import ThemeProviderContainer from 'ThemeProviderContainer';

ReactDOM.render(
  <RecoilRoot>
    <StrictMode>
      <ThemeProviderContainer />
    </StrictMode>
  </RecoilRoot>,
  document.getElementById('root'),
);
