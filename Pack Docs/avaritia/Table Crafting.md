#Mod/Avaritia #RecipeType/Crafting

<ins>Recipes</ins>
Variable crafting tables: 3x3 sculk theme, 5x5 nether theme, 7x7 end theme, 9x9 extreme theme.
Inputs:
- 1-81 Items (Maximum determined by tier)
Outputs:
- 1-64 Items
Tiers: 1- sculk, 2- nether, 3- end, 4- extreme.

Built-in method is available, with arguments like those for vanilla crafting.
Recipe Syntax:
```
event.recipes.avaritia.shaped_table(tier, output, pattern, key)
event.recipes.avaritia.shapeless_table(tier, output, [ingredients])
```

Built-in methods can also be accessed with `AvaritiaRecipes.shaped_table()` and `AvaritiaRecipes.shapeless_table()`

Parameter Types:
tier - `int`
output - `ItemStack`
pattern - `String[]`
key - `{String: String, must be valid Item ID}`
ingredients - `ItemStack` or `String`, must be valid Item ID