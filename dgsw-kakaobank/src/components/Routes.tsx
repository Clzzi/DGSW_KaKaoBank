import * as Pages from 'pages';
import { Redirect, Route, Switch } from 'react-router';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Welcome} />
      <Route exact path="/register" component={Pages.Register} />
      <Redirect path="*" to="/notfound" />
    </Switch>
  );
};
export default Routes;
