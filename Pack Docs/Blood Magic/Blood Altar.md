#Mod/BloodMagic #Multiblock #RecipeType/Machine

<ins>Recipes</ins>
Transforms items with LP
Inputs:
- Item
- LP
Outputs:
- Item

No built-in method available, use custom recipe constructor from `BloodMagicRecipes` instead:
```
BloodMagicRecipes.altar.inputItem(input).outputItem(output).register()
```
Recipe constructor is chainable, but must be ended with `.register()` to add the recipe. Available methods that can be added:
```
.inputItem(Item) // Required
.outputItem(Item) // Required
.syphon(int) // LP Consumed, optional, defaults to 100
.consumeRate(int) // LP Consumed per tick, optional, defaults to total LP/100
.drainRate(int) // LP lost passively each tick, optional, defaults to same as consumeRate
.upgradeLevel(int) // Tier altar required, optional, defaults to 1
```