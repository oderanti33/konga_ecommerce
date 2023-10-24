import React, { useContext } from 'react';
import './App.css';
import Navbarshop from './component/Navbarshop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Cart2 from './component/Cart2';
import SingleProduct from './component/SingleProduct';
import Footer from './component/Footer';
import MobileNavbarShop from './component/MobileNavbarShop';
import MobileBottomNav from './component/MobileBottomNav';
import ReturnPolicy from './component/ReturnPolicy';
import ContactUs from './component/ContactUs';
import SignUppage from './component/SignUppage';
import MobileLoginDefault from './component/MobileLoginDefault';
import { AuthContext } from './component/AuthContext';
import { useAuth } from './component/Auth-hook';


function App() {
  // const [isLogin, setIsLogin] = useState(false);
  const { token, login, userId, logout, firstName, lastName, email } = useAuth();

  const auth = useContext(AuthContext)

  return (
    <div>
      <AuthContext.Provider value={{ isLogin: !!token, login: login, logout: logout, userId: userId, token: token, email: email, firstName: firstName, lastName: lastName }}>
        <Router>
          <MobileNavbarShop />
          <Navbarshop />
          <MobileBottomNav />
          <Switch>
            <Route path='/Cart/overview' exact>
              <Cart2 />
            </Route>
            <Route path='/Product/:url' exact>
              <SingleProduct />
            </Route>
            <Route path='/account/login' exact>
              <MobileLoginDefault />
            </Route>
            <Route path='/account/signup' exact>
              <SignUppage />
            </Route>
            <Route path='/return-policy' exact>
              <ReturnPolicy />
            </Route>
            <Route path='/contact-us' exact>
              <ContactUs />
            </Route>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
          {!auth.onLoginPage && <Footer />}
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App;