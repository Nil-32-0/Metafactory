#Mod/Botania #RecipeType/Machine

Also includes Orechid Ignem for Nether recipes

<ins>Recipes</ins>
Transforms blocks nearby into other types, typically basic stone into ores.
Inputs:
- Block
- Mana
Outputs:
- Block

No built-in method available, use custom recipe constructor from `BotaniaRecipes` instead:
```
BotaniaRecipes.orechid(outputID, inputID, weight)
BotaniaRecipes.orechidIgnem(outputID, inputID, weight)
```

Parameter Types:
outputID - `String`, must be a valid Block ID
inputID - `String`, must be a valid Block ID
weight - `int`