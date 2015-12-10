// Comment box tutorial

// Basic query selector function.
function q(el) {
  if (el.length < 1) return null;
  var type = el[0];
  if (type == '#')
    return document.getElementById(el.substr(1));
  else if (type == '.')
    return document.getElementsByClassName(el.substr(1));
  else
    return document.getElementsByTagName(el);
}

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadComments: function() {
    $.getJSON(this.props.url).then(function(comments) {
      this.setState({data: comments});
    }.bind(this));
  },
  componentDidMount: function() {
    this.loadComments();
    // setInterval(this.loadComments, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment key={comment.id} author={comment.author}>
          {comment.text}
        </Comment>
      )
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var raw = marked(this.props.children.toString(), {sanitize: true});
    return {__html: raw};
  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}/>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="api/comments" pollInterval={2000} />,
  q('#content')
)
