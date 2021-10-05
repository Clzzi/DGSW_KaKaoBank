import { Global } from '@emotion/react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import GlobalStyle from 'styles/globalStyle'
import App from './App'

ReactDOM.render(
  <RecoilRoot>
    <Global styles={GlobalStyle} />
    <App />
  </RecoilRoot>,
  document.getElementById('root'),
)
