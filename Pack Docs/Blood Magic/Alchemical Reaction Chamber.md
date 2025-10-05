Blood Magic Machine

Performs alchemical reactions on items using the provided tool.

<ins>Recipes</ins>
Takes one input item and a tool and some amount of time to produce a variable amount of items. Optional fluid input and output as well.

No built-in method available, use custom recipe constructor from bloodMagicRecipes instead:
```
bloodMagicRecipes.arc.inputItem(input, 1).outputItem(output).register(tool)
```
Recipe constructor is chainable, but must be ended with .register(tool) to add the recipe. Available methods that can be added:
```
.inputItem(Item, count)  // required
.outputItem(Item) // required
.inputFluid(Fluid) // optional
.outputFluid(Fluid) // optional
.addedOutputs(Items[]) // up to three items can be added, NYI
.consumeIngredient(boolean) // effect uncertain, but it's here!
```