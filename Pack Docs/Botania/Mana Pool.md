Botania Recipe Type

Bathe items in mana to transform them.

<ins>Recipes</ins>
Takes an item as an input and returns an item.
Consumes mana and can optionally require a catalyst block.

No built-in method, use custom recipe constructor from botaniaRecipes instead.
```
botaniaRecipes.manaPool.inputItem(item).outputItem(item).register(mana)
```
Recipe constructor is chainable, but must be ended with .register(int) to add the recipe. Available methods that can be added:
```
.inputItem(Item)    // One of this or inputItems is required
.inputItems(Item[]) // List of valid input items
.outputItem(Item)   // Required
.catalyst(String)    // Optional, ID of block to be used as the catalyst
```