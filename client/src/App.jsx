import { useState, useEffect } from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from './components';

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
  const [showSwap, setShowSwap] = useState(false);
  useEffect(() => {
    var auth = localStorage.getItem("auth");
    if(auth) {
      setLoggedStatus(true)
    } else {
      setLoggedStatus(false)
    }
  }, [checkLogged])
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar loggedStatus={loggedStatus} setCheckLogged={setCheckLogged} checkLogged={checkLogged} showSwap={showSwap} setShowSwap={setShowSwap} />
        <Welcome users={users} loggedStatus={loggedStatus} setCheckLogged={setCheckLogged} checkLogged={checkLogged} showSwap={showSwap} setShowSwap={setShowSwap} />
      </div>
      {!loggedStatus && <Services />}
      {loggedStatus && <Transactions />}
      <Footer />
    </div>
  );
};

export default App;
