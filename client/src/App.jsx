import { useState, useEffect } from 'react';
import { Navbar, Welcome, Footer, Services, Transactions, Ramper } from './components';
import { MoralisProvider } from "react-moralis";

const APP_ID = import.meta.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = import.meta.env.REACT_APP_MORALIS_SERVER_URL;

const users = [{
  "name":"admin",
  "email":"admin@bcs.com",
  "password":"admin123"
},{
  "name":"admin",
  "email":"admin@gmail.com",
  "password":"admin123"
},{
  "name":"admin",
  "email":"ashok@gmail.com",
  "password":"admin123"
}]

const App = () => {
  const [loggedStatus, setLoggedStatus] = useState(false)
  const [checkLogged, setCheckLogged] = useState(false)
  const [showSwap, setShowSwap] = useState(false)
  const [showBuySell, setShowBuySell] = useState(false)
  const [showHome, setShowHome] = useState(true)
  useEffect(() => {
    var auth = localStorage.getItem("auth");
    if(auth) {
      setLoggedStatus(true)
    } else {
      setLoggedStatus(false)
    }
  }, [checkLogged])
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar loggedStatus={loggedStatus} setCheckLogged={setCheckLogged} checkLogged={checkLogged} showSwap={showSwap} setShowSwap={setShowSwap} showBuySell={showBuySell} setShowBuySell={setShowBuySell} showHome={showHome} setShowHome={setShowHome} />
        {showBuySell ? <Ramper /> :
          <Welcome users={users} loggedStatus={loggedStatus} setCheckLogged={setCheckLogged} checkLogged={checkLogged} showSwap={showSwap} setShowSwap={setShowSwap} showHome={showHome} setShowHome={setShowHome} />
        }
      </div>
      {!loggedStatus && <Services />}
      {loggedStatus && <Transactions />}
      <Footer />
    </div>
      </MoralisProvider>
  );
};

export default App;
