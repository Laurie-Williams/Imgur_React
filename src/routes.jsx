var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
//Components
var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');


var Routes = (
    <Router history={new HashHistory}>
        <Route path="/" component={Main}>
            <Route path="topics/:id" component={Topic}></Route>
            <Route path="images/:id" component={ImageDetail}></Route>
        </Route>
    </Router>
);

module.exports = Routes;