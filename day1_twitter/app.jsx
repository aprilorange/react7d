var TweetBox = React.createClass({
  getInitialState: function() {
    return {
      count: 140,
      count_state: 'green'
    }
  },
  handleChange: function(e) {
    var count_state = e.target.value.length > 140 ? 'red' : 'green'
    this.setState({
      count: 140 - e.target.value.length,
      count_state: count_state
    })
  },
  render: function() {
    return (
      <div>
        <textarea onChange={this.handleChange} className="form-control" rows="5"/>
        <div className="form-footer">
          <div className="fr">
            <span className={this.state.count_state + ' count'}>{this.state.count}</span><button className="btn">Submit</button>
          </div>
        </div>
      </div>
    )
  }
})

React.render(<TweetBox />, document.getElementById('output'))
