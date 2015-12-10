// Comment box tutorial

// Basic query selector function.
function q(el) {
  if (el.length < 1) return null;
  var type = el[0];
  if (type == '#') return document.getElementById(el.substr(1));else if (type == '.') return document.getElementsByClassName(el.substr(1));else return document.getElementsByTagName(el);
}

var CommentBox = React.createClass({
  displayName: 'CommentBox',

  getInitialState: function () {
    return { data: [] };
  },
  loadComments: function () {
    $.getJSON(this.props.url).then((function (comments) {
      this.setState({ data: comments });
    }).bind(this));
  },
  componentDidMount: function () {
    this.loadComments();
    // setInterval(this.loadComments, this.props.pollInterval);
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'commentBox' },
      React.createElement(
        'h1',
        null,
        'Comments'
      ),
      React.createElement(CommentList, { data: this.state.data }),
      React.createElement(CommentForm, null)
    );
  }
});

var CommentList = React.createClass({
  displayName: 'CommentList',

  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return React.createElement(
        Comment,
        { key: comment.id, author: comment.author },
        comment.text
      );
    });
    return React.createElement(
      'div',
      { className: 'commentList' },
      commentNodes
    );
  }
});

var CommentForm = React.createClass({
  displayName: 'CommentForm',

  render: function () {
    return React.createElement(
      'div',
      { className: 'commentForm' },
      'I am a CommentForm.'
    );
  }
});

var Comment = React.createClass({
  displayName: 'Comment',

  rawMarkup: function () {
    var raw = marked(this.props.children.toString(), { sanitize: true });
    return { __html: raw };
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'comment' },
      React.createElement(
        'h2',
        { className: 'commentAuthor' },
        this.props.author
      ),
      React.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup() })
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, { url: 'api/comments', pollInterval: 2000 }), q('#content'));