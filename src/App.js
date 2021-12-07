import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MinningFarm from './MinningFarm';
import Main from './main';
import Affiliate from './Affiliate';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from './Pricing';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Investment from './Investment'
import User from './User'
import DashboardHead from './dashboardHead';
import Dashboardfooter from './dashboardfooter';
import DashboardHeader from './dashboardHeader';
import Faq from './faq';
import Navbar from './components/Navbar'
import Content from './components/Content';
import ContentFooter from './components/ContentFooter';
import PurchaseContent from './components/PurchaseContent';
import InvestmentContent from './components/InvestmentContent';
import EarningContent from './components/EarningContent';
import DepositContent from './components/DepositContent';
import FundContent from './components/FundContent';
import WithdrawContent from './components/WithdrawContent';
import SettingsContent from './components/SettingsContent';








function App() {

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.id    = 'tawkId';
  //   script.async = true;
  //   script.src   = 'https://embed.tawk.to/' + '5f01080d223d045fcb7b5265' + '/default';
  //   script.charset = 'UTF-8';
  //   script.setAttribute('crossorigin', '*');
  //   document.body.appendChild(script);
  // }, [])

  
   
    

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/auth/user">
            <Navbar />
            <Content />
            <ContentFooter />
          </Route>


          <Route path="/purchase">
            <Navbar />
            <PurchaseContent />
            <ContentFooter />
          </Route>

          <Route path="/investment">
            <Navbar />
            <InvestmentContent />
            <ContentFooter />
          </Route>

            <Route path="/earning">
              <Navbar />
              <EarningContent />
              <ContentFooter />
            </Route>

            <Route path="/deposit">
              <Navbar />
              <DepositContent />
              <ContentFooter />

            </Route>

            <Route path="/withdrawal">
              <Navbar />
              <WithdrawContent />
              <ContentFooter />

            </Route>

            <Route path="/funding">
              <Navbar />
              <FundContent />
              <ContentFooter />

            </Route>

            <Route path="/setting">
              <Navbar />
              <SettingsContent />
              <ContentFooter />
              
            </Route>



            {/* end of protected */}

          <Route path="/signup">
            <Header />
            <Signup />
            <Footer />
          </Route>

          <Route path="/login">
            <Header />
            <Login />
            <Footer />
          </Route>

          <Route path="/investment">
            <Header />
            <Investment />
            <Footer />
          </Route>

          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/pricing">
            <Header />
            <Pricing />
            <Footer />
          </Route>

          <Route path="/farm">
            <Header />
            <MinningFarm />
            <Footer />
          </Route>

          <Route path="/affiliate">
            <Header />
            <Affiliate />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
                    
        </Switch>
    
      </div>
    </Router>

    
  );
}

export default App;





