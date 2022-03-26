import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topbar/TopBar";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import CreateUser from "./pages/createUser/CreateUser";
import ProductList from "./pages/productList/ProductList";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:id" component={User} />
          <Route path="/createUser" component={CreateUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:product/id" component={ProductList} />
          <Route path="/newproduct" component={ProductList} />
        </Switch>
      </div>
    </BrowserRouter>
  );

}
export default App;
