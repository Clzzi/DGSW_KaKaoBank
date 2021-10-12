import * as Pages from 'pages';
import { Redirect, Route, Switch } from 'react-router';
import CustomRoute from './Common/CustomRoute';

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
      <CustomRoute
        exact={true}
        path="/getinfo"
        component={Pages.AddAccountGetInfo}
        fallback={Pages.Main}
        isAllow={() => {
          return true;
        }}
      />
      <Redirect path="*" to="/notfound" />
    </Switch>
  );
};
export default Routes;
