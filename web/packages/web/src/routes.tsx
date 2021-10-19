import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import { Lock } from './views/lock';
import { Unlock } from './views/unlock';
import { ChangeDestination } from './views/change-destination';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch> 
            <Route exact path="/unlock" component={() => <Unlock />} />
            <Route exact path="/change-destination" component={() => <Unlock />} />
            <Route path="/" component={() => <Lock />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
