import { Switch, Route } from "react-router-dom";
import Home from './components/pages/Home/index'
import MarektPlace from './components/pages/MarektPlace/index'
import WalletBalance from './components/pages/WalletBalance/index'
import Drops from './components/pages/Drops/index'
import Accounts from './components/pages/Accounts/index'
import Header from './components/generics/Header/index'

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/market' component={MarektPlace} />
        <Route path='/wallet' component={WalletBalance} />
        <Route path='/drops' component={Drops} />
        <Route path='/account' component={Accounts} />
      </Switch>
    </div>
  );
}

export default App;
