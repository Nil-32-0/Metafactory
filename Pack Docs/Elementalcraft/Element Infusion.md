#Mod/Elementalcraft #RecipeType/Machine

<ins>Recipes</ins>
Infuses elemental mana into items.
Inputs:
- 1 Item
- Elemental Mana
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `ElementalCraftRecipes` instead:
```
ElementalCraftRecipes.infuse(output, input, manaAmount, manaType)
```

Parameter Types:
output - `ItemStack`
input - `ItemStack`
manaAmount - `int`
manaType - `String`, must be one of `"air"`, `"earth"`, `"fire"`, or `"water"`