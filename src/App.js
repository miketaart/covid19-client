import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Dashboard />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={BlogPage} />
        <Route path="/editpost" exact component={EditPage} />
      </Switch>
    </div>
  );
}

export default App;