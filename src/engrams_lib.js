elem = React.createElement;

var Engram = React.createClass({
  propTypes: {
    ID:           React.PropTypes.string.isRequired,
    Name:         React.PropTypes.string.isRequired,
    Cost:         React.PropTypes.number.isRequired,
    MinimumLevel: React.PropTypes.number.isRequired,
    Bias:         React.PropTypes.string,
    Icon:         React.PropTypes.string,
    Requires:     React.PropTypes.string,
    Description:  React.PropTypes.string,
    HarvestTypes: React.PropTypes.any,
    DamageTypes:  React.PropTypes.string,
  },
  
  render: function() {
    return (
      React.createElement('div', {key:       "engram:" + this.props.ID,
                                  className: "engram",
                                 }, 
                          React.createElement('div', {},
                              this.props.Name+ ": " +
                              this.props.Description
                          ),
                          // React.createElement('br'),
                          React.createElement('div', {},
                                              (typeof(this.props.DamageTypes) == "undefined" ? "" : "Damage types: " + this.props.DamageTypes)
                          ),
                          React.createElement('br')
       )
                          
    )
  },
});

document.engrams = [];

template_engram = elem(Engram, {
  ID:           "No ID",
  Name:         "No Name",
  Cost:          0,
  MinimumLevel:  0,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "This doesn't exist",
  HarvestTypes: {your_soul: 6},
  DamageTypes:  "Sanity",
})

