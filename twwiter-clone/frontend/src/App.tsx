import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router';
import { Home } from './pages/Home';
import { SingIn } from './pages/SingIn';
import { selectUserLoadingState } from "./store/ducks/User/selectors";

import TwitterIcon from '@material-ui/icons/Twitter';
import { FetchUserGetMe } from './store/ducks/User/actionCreaters';
import { ActivatePage } from './pages/components/activatePage';


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const StateUserLoading = useSelector(selectUserLoadingState);
  console.log(1);
  React.useEffect(() => {
    if ((StateUserLoading === 'LOADED' || !!window.localStorage.getItem('token')) && (history.location.pathname === "/signIn" || history.location.pathname === "/")) {
      history.push('/home');
    }
    else if (StateUserLoading === 'ERROR' && history.location.pathname !== "/signIn") {
      history.push('/signIn');
    };
  }, [StateUserLoading, history]);
  React.useEffect(() => {
    dispatch(FetchUserGetMe());
  }, [dispatch]);
  if (StateUserLoading === 'LOADING' || StateUserLoading === 'NEVER') {
    return (
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
        <TwitterIcon color="primary" style={{ fontSize: "70px" }} />
      </div>
    );
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signIn" component={SingIn} />
        <Route exact path="/auth/:hash" component={ActivatePage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
