import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditPost from "../components/survey/EditPost";
import Survey from "../components/survey/Survey";
import Blog from "../components/blog/Blog";

const Home = () => {
    return (
        <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/survey" component={Survey} />
            <Route exact path="/editpost" component={EditPost} />
        </Switch>
    );
}

export default Home;
