import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import styled from "styled-components";
import { ProductListing } from "./containers/ProductListing";
import { ProductDetails } from "./containers/ProductDetails";
const Apps = styled.div``;

function App() {
  return (
    <>
      <Apps>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetails} />
            <Route> 404 Error! Page Not Found</Route>
          </Switch>
        </Router>
      </Apps>
    </>
  );
}

export default App;
