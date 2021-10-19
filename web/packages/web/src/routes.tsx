import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  JoinRaffleView,
} from './views';
import { AdminView } from './views/admin';
import { BillingView } from './views/auction/billing';
import { StoreListView } from './views/storeList';
import { MintNFTStoreView } from './views/mintNFTStore';
import { Besting } from './views/besting';
import { GetTicketView } from './views/getTicket';
import { ClaimView } from './views/claim';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch> 
            <Route exact path="/lottery" component={() => <Besting />} />
            <Route path="/" component={() => <div />} />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
