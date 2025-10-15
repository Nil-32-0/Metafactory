#Mod/Elementalcraft #RecipeType/Machine

<ins>Recipes</ins>
Takes four elemental items and infuses them into a central item
Inputs:
- 5 Items
- All Elemental Mana Types
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `ElementalCraftRecipes` instead:
```
ElementalCraftRecipes.pureInfuse(output, [inputs], manaAmount)
```

Parameter Types:
output - `ItemStack`
inputs - `ItemStack`, exactly five
manaAmount - `int`