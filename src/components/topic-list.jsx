var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

TopicList = React.createClass({
    mixins: [
        Reflux.listenTo(TopicStore, 'onChange')
    ],

    getInitialState: function(){
        return {
            topics: []
        }
    },

    componentWillMount: function() {
        Actions.getTopics();
    },

    renderTopics: function(){
        return(
            this.state.topics.slice(0,4).map(function(topic){
                return(
                <Link to={"topics/" + topic.id}
                      className="list-group-item"
                      activeClassName="active"
                      key={topic.id}>
                    <h4>{topic.name}</h4>
                    <p>{topic.description}</p>
                </Link>
                )
            })
        )
    },

    onChange: function(event, topics){
        this.setState({
            topics: topics
        });
    },

    render: function(){
        return(
            <div className="list-group">
                Topic List
                {this.renderTopics()}
            </div>
        )
    }

});

module.exports = TopicList;
