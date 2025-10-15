#Mod/NaturesAura #RecipeType/Machine

<ins>Recipes</ins>
Consumes items and aura to spawn entities.
Inputs:
- 1+ Items
- Aura
Outputs:
- Entity Spawn

Built-in method is available.
Recipe Syntax:
```
event.recipes.naturesaura.animal_spawner(entity, [inputs], aura, time)
```

Built-in method can also be accessed with `NaturesAuraRecipes.animalSpawner()`

Parameter Types:
entity - `String`, must be a valid Entity ID
inputs - `ItemStack`
aura - `int`, optional, default of 0
time - `int`, optional, default of 20