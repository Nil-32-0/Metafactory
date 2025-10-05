Blood Magic Multiblock

Allows performing sacrifices to gain LP, which can be stored in a Soul network or used by the Blood Altar to transform items.

<ins>Recipes</ins>
Takes an input item and some amount of LP to transform it into an output item.

No built-in method available, use custom recipe constructor from bloodMagicRecipes instead:
```
bloodMagicRecipes.altar.inputItem(input).outputItem(output).register()
```
Recipe constructor is chainable, but must be ended with .register() to add the recipe. Available methods that can be added:
```
.inputItem(Item) // Required
.outputItem(Item) // Required
.syphon(int) // LP Consumed, optional, defaults to 100
.consumeRate(int) // LP Consumed per tick, optional, defaults to 1/100 total LP
.drainRate(int) // LP lost passively each tick, optional, defaults to same as consumeRate
.upgradeLevel(int) // Tier altar required, optional, defaults to 1
```