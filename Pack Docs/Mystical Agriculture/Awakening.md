#Mod/MysticalAgriculture #Multiblock #RecipeType/Machine

<ins>Recipes</ins>
Awakens an item through the use of several others
Inputs:
- 1 Item
- 1-4\*64 Essence Items
- 1-4 Additional Items
Outputs:
- 1+ Items

No built-in method available, use miscellaneous custom recipe constructor instead:
```
mysticalAgricultureAwakening(event, output, input, [essences], [additionalInputs])
```

Parameter Types:
event - `RecipesEvent`
output - `ItemStack`
input - `ItemStack`
essences - `ItemStack`, up to four
additionalInputs - `ItemStack`, up to four

If essences other than the basic four Mystical Agriculture are used, colors should be set in an `essence_vessel_colors.json` file loaded with a resource pack. Format within this file should be:
```
{
	"namespace:item_id": "#HEXCODE"
}
```