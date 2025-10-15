Due to many mods adding their own version of saws, a choice must be made to either unify the options or limit them to just one. Until that choice is made, recipes should not be added for this machine and any sawing recipes should use GregTech machines.

<ins>Recipes</ins>
Saws items into other items using Elemental Mana.
Inputs:
- 1 Item
- Elemental Mana
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `ElementalCraftRecipes` instead:
```
ElementalCraftRecipes.saw(output, input, manaAmount, luckRatio)
```

Parameter Types:
output - `ItemStack`
input - `ItemStack`
manaAmount - `int`
luckRatio - `int`, optional, defaults to the output count