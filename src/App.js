
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Details from './components/Details/Details';
import MyOrder from './components/MyOrder/MyOrder';
import BookingService from './components/BookingService/BookingService';
import DashBoard from './components/DashBoard/DashBoard';
import Reviews from './components/Reviews/Reviews';
import Payment from './components/Payment/Payment';
import AddReview from './components/AddReview/AddReview';
import AddProduct from './components/AddProduct/AddProduct';

import ManageOrder from './components/ManageOrder/ManageOrder';
import ManageProduct from './components/ManageProduct/ManageProduct';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute exact path="/bookingservice/:id">
              <BookingService></BookingService>
            </PrivateRoute>

            <Route exact path='/dashBoard'>
              <DashBoard></DashBoard>
            </Route>


            <Route exact path='/payment'>
              <Payment></Payment>
            </Route>
            <Route exact path='/addreview'>
              <AddReview></AddReview>
            </Route>
            <Route exact path='/addproduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route exact path='/reviews'>
              <Reviews></Reviews>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>

            <Route exact path="/myorder">
              <MyOrder></MyOrder>
            </Route>
            <Route exact path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path="/manageorder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path="/manageproduct">
              <ManageProduct></ManageProduct>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
