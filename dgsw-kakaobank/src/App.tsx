import Footer from 'components/Common/Base/Footer';
import Header from 'components/Common/Base/Header';
import Button from 'components/Common/Button';
import AuthInput from 'components/Common/Input/AuthInput';
import InfoInput from 'components/Common/Input/InfoInput';
import { useEffect, useState } from 'react';
import 'styles/font.css';

const App = () => {
  const [input, setInput] = useState<string>('');
  const [authObj, setAuthObj] = useState<string>();

  useEffect(() => {
    console.log(authObj);
  }, [authObj]);

  return (
    <>
      <Button children={'testDiv'} />
      <InfoInput
        value={input}
        name="input"
        placeholder="비밀번호를 입력해주세요"
        onChange={(e) => setInput(e.target.value)}
      />
      <AuthInput
        length={6}
        onChange={(res: string) => setAuthObj(res)}
        password={false}
      />
    </>
  );
};

export default App;
