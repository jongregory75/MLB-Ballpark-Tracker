import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//TODO build out pages based on features we want to implement

import Home from "./pages/Home";
import Signup from "./pages/CreateUser";
import Login from "./pages/Login";
import Header from "./components/Header";
import LoggedHeader from "./components/LoggedHeader";
import Footer from "./components/Footer";
import AddPark from "./pages/addPark";
import Dashboard from "./pages/Dashboard";
import ParksPage from "./pages/ParksPage";
import SinglePark from "./pages/SinglePark";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/createUser" component={Signup} />
              <Route exact path="/addPark" component={AddPark} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/parks" component={ParksPage} />
              <Route path="/franchise" component={SinglePark} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Router>
          <LoggedHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/createUser" component={Signup} />
            <Route exact path="/addPark" component={AddPark} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
