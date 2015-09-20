var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var Actions = require('../actions');
//Components
var Link = ReactRouter.Link;
var TopicStore = require('../stores/topic-store');

var Header = React.createClass({
    mixins: [
        Reflux.listenTo(TopicStore, "onChange")
    ],

    getInitialState: function(){
        return{
            topics: []
        }
    },

    componentWillMount: function(){
        Actions.getTopics();
    },

    onChange: function(event, topics){
        this.setState({
            topics: topics
        })
    },

    renderTopics: function(){
        return this.state.topics.slice(0,4).map(function(topic){
            return(
                <li key={topic.id}>
                    <Link to={"topics/" + topic.id}>
                        {topic.name}
                    </Link>
                </li>
            )
        });
    },

    render: function(){
        return(
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Imgur Browser
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        {this.renderTopics()}
                    </ul>
                </div>
            </nav>
        )
    }
});

module.exports = Header;