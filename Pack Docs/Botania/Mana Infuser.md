#Mod/Botania #Mod/MythicBotany #Multiblock #RecipeType/Crafting

<ins>Recipes</ins>
Stronger version of terrestrial agglomeration plate.
Inputs:
- 1+ Items
- Mana
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `BotaniaRecipes` instead:
```
BotaniaRecipes.manaInfuser(output, [inputs], mana, fromColor, toColor)
```

Parameter Types:
output - `ItemStack`
inputs - `ItemStack`
mana - `int`
fromColor - `String`, must be a valid hex code (#XXXXXX), or `int`, must be a decimal equivalent of a hex code
toColor - `String`, must be a valid hex code (#XXXXXX), or `int`, must be a decimal equivalent of a hex code