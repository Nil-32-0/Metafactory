#Mod/Botania #RecipeType/Crafting

<ins>Recipes</ins>
Bathe items in mana to transform them.
Inputs:
- Item
- Mana
- Catalyst (Block, Optional), not consumed
Outputs:
- Item

No built-in method, use custom recipe constructor from `BotaniaRecipes` instead.
```
BotaniaRecipes.manaPool.inputItem(item).outputItem(item).register(mana)
```
Recipe constructor is chainable, but must be ended with `.register(int)` to add the recipe. Available methods that can be added:
```
.inputItem(Item)    // One of this or inputItems is required
.inputItems(Item[]) // List of valid input items
.outputItem(Item)   // Required
.catalyst(String)    // Optional, ID of block to be used as the catalyst
```