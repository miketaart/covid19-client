import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditPost from "../components/survey/EditPost";
import Survey from "../components/survey/Survey";
import Blog from "../components/blog/Blog";
import PostDetails from "../components/blog/PostDetails";

const Home = () => {
    return (
        <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/posts/survey" component={Survey} />
            <Route exact path="/posts/:id" component={PostDetails} />
            <Route exact path="/posts/edit/:id" component={EditPost} />
        </Switch>
    );
}

export default Home;
