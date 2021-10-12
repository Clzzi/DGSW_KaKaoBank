import * as Pages from 'pages';
import { Redirect, Route, Switch } from 'react-router';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Welcome} />
      <Route exact path="/register" component={Pages.Register} />
      <Route exact path="/login" component={Pages.Login} />
      <Route exact path="/main" component={Pages.Main} />
      <Route exact path="/profile" component={Pages.Profile} />
      <Route exact path="/service" component={Pages.Main} />
      <Route exact path="/detailcard" component={Pages.DetailCard} />
      <Route exact path="/add/info" component={Pages.AddAccountGetInfo} />
      <Route exact path="/add/card" component={Pages.AddAccountSetCard} />
      <Route
        exact
        path="/establish/password"
        component={Pages.EstablishAccountPassword}
      />
      <Redirect path="*" to="/notfound" />
    </Switch>
  );
};
export default Routes;
