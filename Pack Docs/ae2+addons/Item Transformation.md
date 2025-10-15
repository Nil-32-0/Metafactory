#Mod/AE2 #RecipeType/Crafting

Due to Lychee being present, single-item transformations in liquids or through explosions should not be performed with this recipe type. See [Item Entity Inside A Block](Lychee/Item%20Entity%20Inside%20A%20Block.md) or [Item Exploding](Lychee/Item%20Exploding.md) instead.
While any number of items can be used as inputs, more than three items begins cutting off elements of the recipe display.

<ins>Recipes</ins>
Transforms items when they are thrown into water together
Inputs:
- 1+ Items
- Fluid (In-world), not consumed
Outputs:
- 1+ Items

No built-in method, use custom recipe constructor from `AE2Recipes` instead.
```
AE2Recipes.transform(output, fluidTag, [inputs])
```

Parameter Types:
output - `ItemStack`
fluidTag - `String`, must be a valid Fluid Tag
inputs - `ItemStack`