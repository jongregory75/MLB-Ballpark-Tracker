import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//TODO build out pages based on features we want to implement

import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddPark from "./pages/addPark";
import Dashboard from "./pages/Dashboard";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Dashboard />;
  // }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/createUser" component={CreateUser} />
            <Route exact path="/addPark" component={AddPark} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
