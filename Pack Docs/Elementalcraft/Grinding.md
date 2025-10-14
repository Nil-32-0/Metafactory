#Mod/Elementalcraft #RecipeType/Machine

Due to many mods adding their own version of crushers, a choice must be made to either unify the options or limit them to just one. Until that choice is made, recipes should not be added for this machine and any crushing/grinding recipes should use GregTech machines.

<ins>Recipes</ins>
Grinds and crushes items into other items using Elemental Mana.
Inputs:
- 1 Item
- Elemental Mana
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `ElementalCraftRecipes` instead:
```
ElementalCraftRecipes.grind(output, input, manaAmount, luckRatio)
```

Parameter Types:
output - `ItemStack`
input - `ItemStack`
manaAmount - `int`
luckRatio - `int`, optional, defaults to the output count