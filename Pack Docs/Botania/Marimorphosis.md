#Mod/Botania #RecipeType/Machine

<ins>Recipes</ins>
Transforms blocks nearby into other types, typically basic stone into various types of stone.
Inputs:
- Block
- Mana
Outputs:
- Block

No built-in method available, use custom recipe constructor from `BotaniaRecipes` instead:
```
BotaniaRecipes.outputBlock(blockID).register()
```
Recipe constructor is chainable, but must be ended with `.register()` to add the recipe. Available methods that can be added:
```
.outputBlock(String) // Required, parameter is a block ID
.inputBlock(String)  // Optional, parameter is a block ID. Defaults to a tag
.inputBlocks(String) // Optional, parameter is a block tag. Default is 
										#botania:marimorphosis_convertable
.weight(Number)      // Optional, parameter is the weight of the output. Default 1
.biomeBonus(Number, String) // Optional, gives additional weight in biomes with the specified tag. Defaults to 0, with no biomes giving a bonus.
```

Recipe viewer doesn't like block tags for the input and only displays the first one for a given recipe.