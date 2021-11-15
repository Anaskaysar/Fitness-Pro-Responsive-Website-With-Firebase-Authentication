import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer'
import Services from './Pages/Services/Services';
import Navbar from './Pages/Shared/Header/Navbar';
import ServicesDetail from './Pages/Services/ServicesDetail';
import Blogs from './Pages/Blog/Blogs';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute.js/PrivateRoute';
import About from './Pages/About/About';
import SingleBlog from './Pages/Blog/SingleBlog';
import SingleShopItem from './Pages/Shop/SingleShopItem';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
            <Navbar/>     
              <Switch>
                {/* Home Routes  */}
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route exact path="/home">
                  <Home></Home>
                </Route >
                {/* Login & SignUp Routes  */}
                <Route exact path='/login'>
                  <Login></Login>
                </Route>               
                <Route exact path="/signup">
                  <Signup></Signup>
                </Route>
                {/* Services Routes  */}
                <Route exact path="/services">
                  <Services></Services>
                </Route>
                <PrivateRoute exact path="/service/details/:serviceId">
                  <ServicesDetail></ServicesDetail>
                </PrivateRoute>
                {/* Blogs Routes  */}
                <Route exact path="/blogs">
                  <Blogs></Blogs>
                </Route>
                <PrivateRoute exact path="/blog/details/:blogId">
                  <SingleBlog></SingleBlog>
                </PrivateRoute>
                {/* Shop Routes  */}
                <Route exact path="/shop">
                  <Shop></Shop>
                </Route>
                <Route exact path="/shop/item/:itemId">
                  <SingleShopItem></SingleShopItem>
                </Route>
                {/* About  */}
                <Route exact path="/about">
                  <About></About>
                </Route>
                {/* Not Found  */}
                <Route path='*'>
                  <NotFound></NotFound>
                </Route>

              </Switch>
            <Footer/>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
