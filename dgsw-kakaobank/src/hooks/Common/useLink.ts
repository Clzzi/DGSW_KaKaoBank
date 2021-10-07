import { useHistory } from 'react-router';
import { History } from 'history';
import { useCallback } from 'react';

const useLink = (url: string) => {
  const history: History = useHistory();
  const handleLink = useCallback(() => {
    history.push(url);
  }, [history, url]);
  return { handleLink };
};

export default useLink;
