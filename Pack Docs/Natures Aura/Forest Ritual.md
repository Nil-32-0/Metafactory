#Mod/NaturesAura #Multiblock #RecipeType/Machine

<ins>Recipes</ins>
	Perform a ritual with a growing tree to produce items
Inputs:
- 1 Base Item
- 1 Activation Item
Outputs:
- 1+ Items

Built-in method is available.
Recipe Syntax:
```
event.recipes.naturesaura.tree_ritual(output, [inputs], sapling, time)
```

Built-in method can also be accessed with `NaturesAuraRecipes.treeRitual()`

Parameter Types:
output - `ItemStack`
inputs - `ItemStack`
sapling - `String`, must be a valid sapling Block ID, optional, default oak sapling
time - `int`, optional