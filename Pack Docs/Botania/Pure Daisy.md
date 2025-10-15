#Mod/Botania #RecipeType/Machine

<ins>Recipes</ins>
Purifies blocks placed around it
Inputs:
- Block
Outputs:
- Block

No built-in method available, use custom recipe constructor from `BotaniaRecipes` instead:
```
BotaniaRecipes.pureDaisy(outputID, inputID)
```

Parameter Types:
outputID - `String`, must be a valid Block ID
inputID - `String`, must be either a valid Block ID or a valid Block Tag formatted as `"#namespace:tag"`