import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import CreateUser from "./pages/createUser/CreateUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewProduct from "./pages/newProduct/NewProduct";
import Analytics from "./pages/analytics/Analytics";
import './app.css'


const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/users" component={UserList} />
          <Route path="/user/:id" component={User} />
          <Route path="/createUser" component={CreateUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:id" component={Product} />
          <Route path="/newproduct" component={NewProduct} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );

}
export default App;
