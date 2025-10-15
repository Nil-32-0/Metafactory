#Mod/Occultism #RecipeType/Machine

<ins>Recipes</ins>
Produces ores
Inputs:
- Dimensional Miner
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `OccultismRecipes` instead:
```
OccultismRecipes.dimMiner(output, minerTag, weight)
```

Parameter Types:
output - `ItemStack`
minerTag - `ItemStack`, must correspond to an existing Occultism dimensional miner
weight - `int`