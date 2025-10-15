#Mod/BloodMagic #RecipeType/Machine

<ins>Recipes</ins>
Combines items using Demonic Will.
Inputs:
- 1-4 Items
- Will Container
- Demonic Will
Outputs:
- 1-64 Items

No built-in method available, use custom recipe constructor from `BloodMagicRecipes` instead:
```
BloodMagicRecipes.hellForge.inputItems([Item, Item]).ouputItem(Item).register()
```
Recipe constructor is chainable, but must be ended with `.register()` to add the recipe. Available methods that can be added:
```
.inputItems(Item[]) // Required, at least one item must be provided
.outputItem(Item) // Required
.drain(double) // Will drained, optional, defaults to 0
.willRequirement(double) // Minimum Will required, defaults to twice drain
```