import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import NavigationBar from "./components/Navbar";
import LogIn from "./components/LogIn";
import Products from "./products/Products";
import ProductPage from "./products/ProductPage";
import store from "./store";

const App = () => {
    return(
        <Router>
            <Provider store={store}>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/product/:id" render={(props) => <ProductPage {...props }/>}/>
                    <Route exact path="/log-in" component={LogIn} />
                </Switch>
            </Provider>
        </Router>
    )
}

export default App;