#Mod/Botania #Multiblock #RecipeType/Crafting

<ins>Recipes</ins>
Perform ritual with layout of runes in-world
Inputs:
- 1+ Items
- Rune Multiblock (Optionally Consumed)
Outputs:
- 1+ Items

No built-in method available, use custom recipe constructor from `BotaniaRecipes` instead:
```
BotaniaRecipes.runeRitual([outputs], [inputs], centerItem, mana, duration, runeLayout)
```

To ease creation of runes for use within the layout slightly, the `runeConstructor` function is provided, which can be invoked as such:
`runeConstructor(item, x, z, consume)`
and which will return an object representing the rune with the provided characteristics.

Parameter Types:
<ins>runeRitual</ins>
outputs - `ItemStack`
inputs - `ItemStack`
centerItem - `ItemStack`
mana - `int`
duration - `int`
runeLayout - `runeConstructor(~)[]`, can be passed a list of objects but should always receive a list of `runeConstructor`

<ins>runeConstructor</ins>
item - `ItemStack`
x - `int`
z - `int`
consume - `bool`