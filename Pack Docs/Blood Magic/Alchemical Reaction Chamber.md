#Mod/BloodMagic #RecipeType/Machine

<ins>Recipes</ins>
Performs alchemical reactions on items using the provided tool.
Inputs:
- Item
- Tool (Item)
- Fluid (Optional)
Outputs:
- 1-64 Items
- Fluid (Optional)

No built-in method available, use custom recipe constructor from `BloodMagicRecipes` instead:
```
BloodMagicRecipes.arc.inputItem(input, 1).outputItem(output).register(tool)
```
Recipe constructor is chainable, but must be ended with `.register(Item)` to add the recipe. Available methods that can be added:
```
.inputItem(ItemStack, int)  // required, number is count of the provided item
.outputItem(ItemStack) // required
.inputFluid(FluidStack) // optional
.outputFluid(FluidStack) // optional
.addedOutputs(Items[]) // up to three items can be added, NYI
.consumeIngredient(boolean) // effect uncertain, but it's here!
```