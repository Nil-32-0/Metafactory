#Mod/BloodMagic #RecipeType/Crafting

<ins>Recipes</ins>
Magically combines the two items provided
Inputs:
- Base Item
- Addition Item
Outputs:
- Item
Requires a texture for the circle to be specified.

No built-in method available, use custom recipe constructor from `BloodMagicRecipes` instead:
```
BloodMagicRecipes.array(output, base, addition, texture)
```

Parameter Types:
output - `ItemStack`
base - `ItemStack`
addition - `ItemStack`
texture - `String`, must be a valid resource location of a texture