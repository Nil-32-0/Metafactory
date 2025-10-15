#Mod/Occultism #RecipeType/Machine

Due to many mods adding their own version of crushers, a choice must be made to either unify the options or limit them to just one. Until that choice is made, recipes should not be added for this machine and any crushing/grinding recipes should use GregTech machines.

<ins>Recipes</ins>
Uses contracted demons to crush items
Inputs:
- Item
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `OccultismRecipes` instead:
```
OccultismRecipes.crush(output, input, duration, multiply)
```

Parameter Types:
output - `ItemStack`
input - `ItemStack`
duration - `int`, optional, defaults to 20
multiply - `bool`, optional, defaults to true