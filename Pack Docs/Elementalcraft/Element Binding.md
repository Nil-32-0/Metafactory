#Mod/Elementalcraft #RecipeType/Machine

<ins>Recipes</ins>
Bind items together with elemental mana.
Inputs:
- 1+ Items
- Elemental Mana
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `ElementalCraftRecipes` instead:
```
ElementalCraftRecipes.bind(output, [inputs], manaAmount, manaType)
```

Parameter Types:
output - `ItemStack`
inputs - `ItemStack`
manaAmount - `int`
manaType - `String`, must be one of `"air"`, `"earth"`, `"fire"`, or `"water"`