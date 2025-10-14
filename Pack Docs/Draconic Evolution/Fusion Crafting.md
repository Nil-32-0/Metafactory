#Mod/DraconicEvolution #Multiblock #RecipeType/Machine

<ins>Recipes</ins>
Fuse items from injectors into the item(s) on the core.
Inputs:
- 1+ Core Items
- 1+ Injected Items
- Energy
Outputs:
- 1+ Items

No built-in method available, use miscellaneous custom recipe constructor instead:
```
fusionInjection(event, core, coreCount, [inputs], result, tier, energy)
```

Parameter Types:
event - `RecipesEvent`
core - `ItemStack`
coreCount - `int`
inputs - `ItemStack`
result - `ItemStack`
tier - `int`, from 1-4
energy - `int`