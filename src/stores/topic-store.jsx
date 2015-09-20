var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

var TopicStore = Reflux.createStore({
    listenables: [Actions],

    triggerChange: function(){
        this.trigger('change', this.topics);
    },

    getTopics: function(){
        return(
            Api.get('topics/defaults')
                .then(function(json){
                    this.topics = json.data;
                    this.triggerChange();
                }.bind(this))
        );
    }
});

module.exports = TopicStore;