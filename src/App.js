import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/Inventroy/Inventory';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import OrderReview from './component/OrderReview/OrderReview';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Register from './component/Register/Register';
import Shipping from './component/Shipping/Shipping';
import Shop from './component/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

function App() {

  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <PrivateRoute path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/inventory'>
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path='/review'>
              <OrderReview></OrderReview>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
