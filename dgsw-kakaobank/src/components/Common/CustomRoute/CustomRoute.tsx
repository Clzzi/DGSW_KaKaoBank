import { FC } from 'react';
import { Route } from 'react-router';

interface ICustonRouteProps {
  path: string | string[];
  component: FC;
  fallback: FC;
  exact?: boolean;
  isAllow: () => boolean;
}

const CustomRoute = ({
  component,
  fallback,
  isAllow,
  path,
  exact,
}: ICustonRouteProps): JSX.Element => {
  return (
    <Route
      exact={exact ? true : false}
      path={path}
      component={isAllow() ? component : fallback}
    />
  );
};

export default CustomRoute;
