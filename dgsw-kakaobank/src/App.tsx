import Header from 'components/Common/Base/Header';
import Button from 'components/Common/Button';
import InfoInput from 'components/Common/Input/InfoInput';
import { useState } from 'react';
import 'styles/test.css';

const App = () => {
  const [input, setInput] = useState<string>('');

  return (
    <div>
      <Header isLogout={true} />
      <Button children={'testDiv'} />
      <InfoInput
        value={input}
        name="input"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default App;
