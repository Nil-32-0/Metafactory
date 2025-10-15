#Mod/BloodMagic #RecipeType/Machine

<ins>Recipes</ins>
Combines items using LP.
Inputs:
- 1-6 Items
- Blood Orb
- LP
Outputs:
- 1-64 Items

No built-in method available, use custom recipe constructor from `BloodMagicRecipes` instead:
```
BloodMagicRecipes.alchemyTable.inputItems([Item, Item]).ouputItem(Item).register()
```
Recipe constructor is chainable, but must be ended with `.register()` to add the recipe. Available methods that can be added:
```
.inputItems(Item[]) // Required, at least one item must be provided
.outputItem(Item) // Required
.syphon(int) // LP consumed, optional, defaults to 100
.duration(int) // Duration, optional, defaults to 100
.upgradeLevel(int) // Tier orb required, optional, defaults to 1
```