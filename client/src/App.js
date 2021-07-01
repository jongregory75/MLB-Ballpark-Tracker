import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//TODO build out pages based on features we want to implement

import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddPark from "./pages/addPark";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <div>
            <Header />

            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/createUser" component={CreateUser} />
            <Rounte path="/addPark" component={AddPark} />

            <Footer />
          </div>
          <Route path="/parks" component={ParksPage} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
