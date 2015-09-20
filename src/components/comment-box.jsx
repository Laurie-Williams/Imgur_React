var React = require('react');

var CommentBox = React.createClass({

    renderComments: function(){
        return(
            this.props.comments.slice(0,20).map(function(comment){
                return(
                    <li className="list-group-item comment-box" key={comment.id}>
                        <span className="badge">{comment.ups}</span>
                        <h5>{comment.author}</h5>
                        <p>{comment.comment}</p>
                    </li>
                )
            })
        )
    },

    render: function(){
        return(
            <ul className="list-group">
                {this.renderComments()}
            </ul>
        )
    }
});

module.exports = CommentBox;