import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      {/* <Services /> */}
      <Transactions />
      <Footer />
    </div>
  );
};

export default Dashboard;
