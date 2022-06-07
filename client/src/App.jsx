import { useState, useEffect } from 'react';
import { Navbar, Welcome, Footer, Services, Transactions, Ramper } from './components';
import { MoralisProvider } from "react-moralis";

const APP_ID = "0iruzMPO1OTw6WDNGbDSS0EOrUSHwWVJtfd1zKg6";
const SERVER_URL="https://rkuubyy1u1fl.usemoralis.com:2053/server";

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
  useEffect(() => {
    var auth = localStorage.getItem("auth");
    if(auth) {
      setLoggedStatus(true)
    } else {
      setLoggedStatus(false)
    }
  }, [checkLogged])
  console.log("APP_ID is ",APP_ID);
  console.log("SERVER_URL is ", SERVER_URL);
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar loggedStatus={loggedStatus} setCheckLogged={setCheckLogged} checkLogged={checkLogged} showSwap={showSwap} setShowSwap={setShowSwap} showBuySell={showBuySell} setShowBuySell={setShowBuySell} />
        {showBuySell ? <Ramper /> :
          <Welcome users={users} loggedStatus={loggedStatus} setCheckLogged={setCheckLogged} checkLogged={checkLogged} showSwap={showSwap} setShowSwap={setShowSwap} />
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
