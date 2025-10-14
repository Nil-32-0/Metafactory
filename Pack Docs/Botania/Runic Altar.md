#Mod/Botania #RecipeType/Crafting

<ins>Recipes</ins>
Crafts items into runes with mana.
Inputs:
- 1+ Items
- Mana
- Livingrock
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `BotaniaRecipes` instead:
```
BotaniaRecipes.runeAltar(output, [inputs], mana)
```

Parameter Types:
output - `ItemStack`
inputs - `ItemStack`
mana - `int`