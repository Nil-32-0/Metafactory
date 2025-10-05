Blood Magic Crafting

Combines items using Demonic Will.

<ins>Recipes</ins>
Takes up to four items and a will container to create up to a stack of output items.
Consumes Demonic Will.

No built-in method available, use custom recipe constructor from bloodMagicRecipes instead:
```
bloodMagicRecipes.hellForge.inputItems([Item, Item]).ouputItem(Item).register()
```
Recipe constructor is chainable, but must be ended with .register() to add the recipe. Available methods that can be added:
```
.inputItems(Item[]) // Required, at least one item must be provided
.outputItem(Item) // Required
.drain(double) // Will drained, optional, defaults to 0
.willRequirement(double) // Minimum Will required, defaults to twice drain
```