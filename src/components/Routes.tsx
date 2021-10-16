import * as Pages from 'pages';
import { Redirect, Route, Switch } from 'react-router';
import CustomRoute from './Common/CustomRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Pages.Welcome} />
      <Route exact path="/register" component={Pages.Register} />
      <Route exact path="/login" component={Pages.Login} />
      <CustomRoute exact path="/main" component={Pages.Main} />
      <CustomRoute exact path="/profile" component={Pages.Profile} />
      <CustomRoute exact path="/service" component={Pages.Main} />
      <CustomRoute exact path="/password" component={Pages.Password} />
      <CustomRoute exact path="/detailcard" component={Pages.DetailCard} />

      <CustomRoute exact path="/add/info" component={Pages.AddAccountGetInfo} />
      <CustomRoute exact path="/add/card" component={Pages.AddAccountSetCard} />

      <CustomRoute
        exact
        path="/establish/password"
        component={Pages.EstablishAccountPassword}
      />
      <CustomRoute
        exact
        path="/establish/complete"
        component={Pages.EstablishAccountComplete}
      />

      <CustomRoute
        exact
        path="/remittance/getcard"
        component={Pages.RemittanceGetCard}
      />
      <CustomRoute
        exact
        path="/remittance/setcard"
        component={Pages.RemittanceSetCard}
      />
      <CustomRoute
        exact
        path="/remittance/confirm"
        component={Pages.RemittanceConfirm}
      />
      <CustomRoute
        exact
        path="/remittance/password"
        component={Pages.RemittanceGetPassword}
      />
      <CustomRoute
        exact
        path="/remittance/complete"
        component={Pages.RemittanceComplete}
      />

      <CustomRoute exact path="/bring/getcard" component={Pages.BringGetCard} />
      <CustomRoute exact path="/bring/money" component={Pages.BringMoney} />
      <CustomRoute exact path="/bring/password" component={Pages.BringGetPassword} />
      <CustomRoute exact path="/bring/complete" component={Pages.BringComplete} />

      <Redirect path="*" to="/notfound" />
    </Switch>
  );
};
export default Routes;
