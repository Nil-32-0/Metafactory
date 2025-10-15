#Mod/MysticalAgriculture #Multiblock #RecipeType/Machine

<ins>Recipes</ins>
Infuses an item with several others
Inputs:
- 1 Item
- 1-8 Additional Items
Outputs:
- 1+ Items

No built-in method available, use miscellaneous custom recipe constructor instead:
```
mysticalAgricultureInfusion(event, output, input, additionalInputs)
```

Parameter Types:
event - `RecipesEvent`
output - `ItemStack`
input - `ItemStack`
additionalInputs - `ItemStack`, up to eight