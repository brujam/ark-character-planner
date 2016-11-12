const elem = React.createElement;
ReactDOM.render(elem("h1", {}, "Hello World"), document.getElementById("react_anchor"));

var Engram = React.createClass({
  propTypes: {
    ID:           React.PropTypes.string.isRequired,
    Name:         React.PropTypes.string.isRequired,
    Cost:         React.PropTypes.number.isRequired,
    Bias:         React.PropTypes.string,
    Icon:         React.PropTypes.string,
    Dependencies: React.PropTypes.string,
    Description:  React.PropTypes.string,
    HarvestTypes: React.PropTypes.any,
    DamageTypes:  React.PropTypes.string,
  },
  
  render: function() {
    return (
      React.createElement('div', {className: this.props.ID}, 
                          React.createElement('div', {},
                              this.props.Name+ ": " +
                              this.props.Description
                          ),
                          React.createElement('br'),
                          React.createElement('div', {},
                                              "Damage types: " +
                              (typeof this.props.DamageTypes == "undefined" ? "None" : this.props.DamageTypes)
                          )
       )
                          
    )
  },
});

engrams = [];
fists = elem(Engram, {
  ID:           "vanilla:must:fists",
  Name:         "Fists",
  Cost:          0,
  Description:  "Fists. Blunt weaponry. Use to get a Stone Pick, or to knock out Dodos for taming.",
  HarvestTypes: {thatch:1,
                 stone:1,
                 berries:1,
                },
  DamageTypes:  "Lethal, Torpor",
});
engrams.push(fists);



ReactDOM.render(fists, document.getElementById("react_anchor"));