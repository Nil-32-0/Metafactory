#Mod/Malum #RecipeType/Machine

<ins>Recipes</ins>
Focus spirits onto a central item to transform it.
Inputs:
- 1 Item
- 1+ Spirits
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `malumRecipes` instead:
```
malumRecipes.focus(output, focus, focusDamage, [spirits], duration)
```

Parameter Types:
output - `ItemStack`
focus - `ItemStack`, if no durability then focusDamage is ignored
focusDamage - `int`
spirits - `[String<spiritType>, int]` (List of lists)
duration - `int`

Valid `spiritType` values:
- Sacred
- Wicked
- Arcane
- Eldritch
- Aerial
- Aqueous
- Earthen
- Infernal