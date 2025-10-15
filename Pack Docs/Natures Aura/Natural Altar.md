#Mod/NaturesAura #Multiblock #RecipeType/Machine

<ins>Recipes</ins>
Consumes aura to transform items. Optionally takes a catalyst block.
Inputs:
- 1 Item
- Aura
Outputs:
- 1+ Items

Built-in method is available.
Recipe Syntax:
```
event.recipes.naturesaura.altar(output, input, aura, time, catalyst)
```

Built-in method can also be accessed with `NaturesAuraRecipes.altar()`

Parameter Types:
output - `ItemStack`
input - `ItemStack`
aura - `int`, optional, default of 0
time - `int`, optional, default of 20
catalyst - `String`, must be a valid Block ID, optional, default of none