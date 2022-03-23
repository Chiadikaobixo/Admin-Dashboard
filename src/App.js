import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topbar/TopBar";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserList from "./pages/userList/UserList";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/users" component={UserList}/>
        </Switch>
      </div>
    </BrowserRouter>
  );

}
export default App;
