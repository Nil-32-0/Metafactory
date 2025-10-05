Blood Magic Crafting

Combines items using LP.

<ins>Recipes</ins>
Takes up to six items and a blood orb to create up to one stack of output items.
Consumes LP to run.

No built-in method available, use custom recipe constructor from bloodMagicRecipes instead:
```
bloodMagicRecipes.alchemyTable.inputItems([Item, Item]).ouputItem(Item).register()
```
Recipe constructor is chainable, but must be ended with .register() to add the recipe. Available methods that can be added:
```
.inputItems(Item[]) // Required, at least one item must be provided
.outputItem(Item) // Required
.syphon(int) // LP consumed, optional, defaults to 100
.duration(int) // Duration, optional, defaults to 100
.upgradeLevel(int) // Tier orb required, optional, defaults to 1
```