#Mod/Malum #RecipeType/Machine

<ins>Recipes</ins>
Infuse some additional items into a base item with spirits.
Inputs:
- 1+ Base Items
- 0+ Additional Items
- 1+ Spirits
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `malumRecipes` instead:
```
malumRecipes.focus(output, focus, [additions], [spirits])
```

Parameter Types:
output - `ItemStack`
focus - `ItemStack`
additions - `ItemStack`
spirits - `[String<spiritType>, int]` (List of lists)

Valid `spiritType` values:
- Sacred
- Wicked
- Arcane
- Eldritch
- Aerial
- Aqueous
- Earthen
- Infernal