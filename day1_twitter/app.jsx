var tweets = store.get('tweets') || []
var Timeline = React.createClass({
  render: function() {
    var list = this.props.tweets.map(function(t) {
      return (
        <div className="tweet">
          {t.content}
          <div className="tweet-meta">
            {t.createdAt}
          </div>
        </div>
      )
    })
    return (
      <div className="timeline">
        {list}
      </div>
    )
  }
})
var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      count: 280,
      count_state: 'green',
      content: '',
      tweets: tweets
    }
  },
  handleChange: function(e) {
    var count_state = e.target.value.length > 280 ? 'red' : 'green'
    this.setState({
      count: 280 - e.target.value.length,
      count_state: count_state,
      content: e.target.value
    })
  },
  handleSubmit: function() {
    var tweet = {
      content: this.state.content,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    tweets = [tweet].concat(tweets)
    store.set('tweets', tweets)
    this.setState({
      tweets: store.get('tweets'),
      count: 280,
      content: '',
      count_state: 'green'
    })
    this.refs.textarea.getDOMNode().value = ''
  },
  render: function() {
    return (
      <div>
        <textarea ref="textarea" onChange={this.handleChange} className="form-control" rows="5"/>
        <div className="form-footer clearfix">
          <div className="fr">
            <span className={this.state.count_state + ' count'}>{this.state.count}</span>
            <button disabled={this.state.content.length <= 0 || this.state.content.length > 280} className="btn" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
        <Timeline tweets={this.state.tweets} />
      </div>
    )
  }
})

React.render(<TweetBox />, document.getElementById('output'))
