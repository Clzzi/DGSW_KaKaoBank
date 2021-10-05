import { css } from '@emotion/react'

const testStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  width: 100vw;
  height: 400px;
`

const App = () => {
  return (
    <div>
      <div css={testStyle}>hihi</div>
    </div>
  )
}

export default App
