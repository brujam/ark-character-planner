document.log = [];
document.logNumber = 0;

var LogEntry = React.createClass({
  propTypes: {
    ID:           React.PropTypes.number,
    Text:         React.PropTypes.string.isRequired,
  },
  
  render: function() {
    return (
      React.createElement('li', {className: "log",
                                 key:       "logEntry:engram:" + this.props.ID
                                }, 
                          this.props.Text)
    )
  },
});

function addLogEntry(logEntry) {
  document.log.push(elem(LogEntry, {Text: logEntry, ID: document.logNumber}));
  document.logNumber++;
  ReactDOM.render(elem("ul", {}, document.log),
                  document.getElementById("log_anchor")
                 );
}

addLogEntry("Fists");
addLogEntry("Stone Pick");
addLogEntry("Torch");