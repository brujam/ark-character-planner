# ark-character-planner
Ark character planner. Meant to support modded ARKs too...

Ideas:

* Engram planner.
  * List available engrams in order that they appear in the list.
    * Split out by "mod".
      * Vanilla, mandatory
      * Vanilla, pick
      * DOX etc.
    * "Bias" icons on different engrams to help guide a build
      * Plant (Farmer) bias on farm plots, compost bin, greenhouse + irrigation, beekeeper armour if exists
      * Armour bias on armour etc
      * Wood (resource) bias on tools and saddles for resource gather dinos
      * Egg bias on incubators etc. Tranq arrows, narcotic, and everything before it
      * Sword bias on battle saddles, weapons, ammo.
    * Logs each step you make.
    * Workflow:
      * Click ding button, get 8 engram points.
      * (Recorded in log)
      * Click engrams you want.
      * Recorded in log. (intent: levelling order, work out progression)
      * Click an engram with too few points? Autoding.
      * If your level is too low for an engram, you have to manually ding until it unlocks.
  * Data model
    * Engram
      * ID: 
        * vanilla:must:fists
        * vanilla:must:stone_pick
        * vanilla:must:torch
        * vanilla:stone_axe
        * mod:dino_overhaul_x:apex_dodo_saddle
        * mod:capitalism:basic_sell_table
        * mod:incubator:incubator
      * Name
      * Bias
      * Icon link if available
      * Dependencies
        * lists only direct dependencies, not entire tree
        * entire tree can be resolved at runtime
        * pop up to add dependencies to engram list
      * Description
      * HarvestTypes: (what resources it is good at harvesting - trike for stone etc)
        * Do little icon grid, blue for good, orange for gets-some-but-not-much, dark grey for none at all?
        * thatch:1 <-- main resource
        * wood:2 <-- sub-resource
        * absent <-- darkened
        * Valid harvest types:
          * Thatch, wood
          * Stone, Flint, Metal, Crystal
          * Fiber
          * Berries
          * Meat, Hide, Chitin, Keratin
        
v1 Definition of Done: has a few vanilla engrams, enough for testing adding, removing, ding button, dependencies. Save log to local storage. (as "ding, vanilla:stone_axe, spear, ding,"...)
v2 DoD: All Vanilla <-- Share for feedback!
v3 DoD: all Scorched Earth
v4 Definition of Done: has the Mentat Modpack hard coded in
v5 Definition of Done: able to turn on / off mods, have page to show / write own data model.
