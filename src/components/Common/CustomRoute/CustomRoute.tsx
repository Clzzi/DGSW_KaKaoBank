import LoginPage from 'pages/LoginPage';
import Token from 'lib/Token';
import { FC } from 'react';
import { Route } from 'react-router';

interface ICustonRouteProps {
  path: string | string[];
  component: FC;
  exact?: boolean;
}

const CustomRoute = ({
  component,
  path,
  exact,
}: ICustonRouteProps): JSX.Element => {
  return (
    <Route
      exact={exact ? true : false}
      path={path}
      component={
        Token.getToken('refresh-token', 'session') ? component : LoginPage
      }
    />
  );
};

export default CustomRoute;
