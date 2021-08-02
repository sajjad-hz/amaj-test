import { Switch, Route } from "react-router-dom";
import Home from './components/pages/Home/index'
import MarektPlace from './components/pages/MarektPlace/index'
import WalletBalance from './components/pages/WalletBalance/index'
import Drops from './components/pages/Drops/index'
import Accounts from './components/pages/Accounts/index'

import "./App.scss";

function App() {
  return (
    <div className="App">
      <p>hiii</p>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/market' component={MarektPlace} />
        <Route path='/wallet' component={WalletBalance} />
        <Route path='/drops' component={Drops} />
        <Route path='/account' component={Accounts} />
      </Switch>
    </div>
  );
}

export default App;
