//had use state with react ,{useState}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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
import Auth from "./utils/auth";
<<<<<<< HEAD

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });
=======
// import SinglePark from "./pages/SinglePark";
>>>>>>> main
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [token, setToken] = useState();
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  if (!token) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/createUser" component={Signup} />
              <Route exact path="/addPark" component={AddPark} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/parks" component={ParksPage} />
              <Route exact path="/franchise" component={SinglePark} />
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
            <Route exact path="/parks" component={ParksPage} />
            <Route exact path="/franchise" component={SinglePark} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
