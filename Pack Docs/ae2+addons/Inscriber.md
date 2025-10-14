#Mod/AE2 #RecipeType/Machine

<ins>Recipes</ins>
Has two modes: Inscribe or Press.
Input (Press):
- 1-3 Items
- Power
Input (Inscribe):
- 1 Item
- 1 Press (Item), not consumed
- Power
Output:
- 1 Item

No built-in method, use custom recipe constructors from `AE2Recipes` instead.
Recipe Syntax:
```
AE2Recipes.inscriber.inscribe(output, input, press) 
AE2Recipes.inscriber.press(output, middle, top, bottom)
```

In press mode, the top and bottom parameters are optional.

Parameter Types:
All are `ItemStack`