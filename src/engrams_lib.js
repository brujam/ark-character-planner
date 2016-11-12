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
      React.createElement('div', {className: this.props.ID}, 
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

// Engrams and engram texts taken from:
// http://ark.gamepedia.com/Engrams
fists = elem(Engram, {
  ID:           "vanilla:must:fists",
  Name:         "Fists",
  Cost:          0,
  MinimumLevel:  0,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "Fists. Blunt weaponry. Use to get a Stone Pick, or to knock out Dodos for taming.",
  HarvestTypes: {thatch:2,
                 wood:1,
                 stone:1,
                 berries:1,
                },
  DamageTypes:  "Lethal, Torpor",
});
engrams.push(fists);
engrams.push(elem(Engram, {
  ID:           "vanilla:must:stone_pick",
  Name:         "Stone Pick",
  Cost:          0,
  MinimumLevel:  0,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "Stone Pick. Your very first basic tool.",
  HarvestTypes: {thatch:1,
                 wood:2,
                 stone:2,
                 flint:1,
                 metal:1,
                 crystal:1,
                 fiber:0,
                 berries:0,
                 meat:1,
                 hide:2,
                 chitin:2,
                 keratin:2,
                },
  DamageTypes:  "Lethal",
}));
engrams.push(elem(Engram, {
  ID:           "vanilla:must:torch",
  Name:         "Torch",
  Cost:          0,
  MinimumLevel:  0,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "Light up the night! Can be thrown to the floor with a right-click.",
  HarvestTypes: {thatch:0,
                 wood:0,
                 stone:1,
                 flint:0,
                 metal:0,
                 crystal:0,
                 fiber:1,
                 berries:1,
                 meat:0,
                 hide:0,
                 chitin:0,
                 keratin:0,
                },
  DamageTypes:  "Lethal",
}));

// The level 2 block of Engrams
engrams.push(elem(Engram, {
  ID:           "vanilla:campfire",
  Name:         "Campfire",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "Creates light, heats an area, and cooks meat for you. Transforms wood into charcoal.",
  /*
  HarvestTypes: {thatch:1,
                 wood:1,
                 stone:1,
                 flint:1,
                 metal:1,
                 crystal:1,
                 fiber:1,
                 berries:1,
                 meat:1,
                 hide:1,
                 chitin:1,
                 keratin:1,
                },
  */
  // DamageTypes:  "Sanity",
}))

engrams.push(elem(Engram, {
  ID:           "vanilla:stone_hatchet",
  Name:         "Stone Hatchet",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "A sharp flint hatchet for harvesting wood from trees, stone from rocks, and skin from bodies.",
  HarvestTypes: {thatch:2,
                 wood:1,
                 stone:1,
                 flint:2,
                 metal:2,
                 crystal:0,
                 fiber:0,
                 berries:0,
                 meat:2,
                 hide:1,
                 chitin:0,
                 keratin:0,
                },
  DamageTypes:  "Lethal",
}))

engrams.push(elem(Engram, {
  ID:           "vanilla:spear",
  Name:         "Spear",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "An easily made melee weapon that can also be thrown. Has a chance [3.5%] to break when used.",
  HarvestTypes: {thatch:0,
                 wood:0,
                 stone:0,
                 flint:0,
                 metal:0,
                 crystal:0,
                 fiber:0,
                 berries:0,
                 meat:0,
                 hide:0,
                 chitin:0,
                 keratin:0,
                },
  DamageTypes:  "Lethal (30 stab / 50 throw)",
}))

engrams.push(elem(Engram, {
  ID:           "vanilla:note",
  Name:         "Note",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "None",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "Write your own text on a note! Or put it in a Cooking Pot to make a Custom Recipe!",
}))

engrams.push(elem(Engram, {
  ID:           "vanilla:cloth_pants",
  Name:         "Cloth Pants",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "Armour",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "Provides some protection from the heat and cold, but only minimal protection from injuries.",
}))

engrams.push(elem(Engram, {
  ID:           "vanilla:cloth_shirt",
  Name:         "Cloth Shirt",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "Armour",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "Provides some protection from the heat and cold, but only minimal protection from injuries.",
}))

engrams.push(elem(Engram, {
  ID:           "vanilla:thatch_foundation",
  Name:         "Thatch Foundation",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "none",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "A foundation is required to build structures. This one is a wooden frame with some smooth bundles of sticks that act as a floor.",
}))

engrams.push(elem(Engram, {
  ID:           "vanilla:thatch_doorframe",
  Name:         "Thatch Doorframe",
  Cost:          3,
  MinimumLevel:  2,
  Bias:         "none",
  Icon:         "null.png",
  Requires:     "none",
  Description:  "This thatch wall has an entrance in it, but requires more wood to stay stable.",
}))


engramList = elem('div', {}, engrams);
ReactDOM.render(engramList, document.getElementById("react_anchor"));

