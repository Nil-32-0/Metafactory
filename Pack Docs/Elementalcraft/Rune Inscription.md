#Mod/Elementalcraft #RecipeType/Machine

<ins>Recipes</ins>
Inscribes runes onto a rune slate with extra items and elemental mana.
Inputs:
- 4 Items
- Elemental Mana
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `ElementalCraftRecipes` instead:
```
ElementalCraftRecipes.inscribe(output, [inputs], manaAmount, manaType)
```

Parameter Types:
output - `ItemStack`
inputs - `ItemStack`, exactly four
manaAmount - `int`
manaType - `String`, must be one of `"air"`, `"earth"`, `"fire"`, or `"water"`