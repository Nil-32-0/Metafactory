AE2 Machine

Inscribes material(s) together or presses a pattern into a material
Custom unlock tier: *MV*

<ins>Recipes</ins>
Has two modes: Inscribe or Press. In Press, up to three items are combined into one. In Inscribe, a press model presses a second item into a new item.
Consumes power.

No built-in method, use custom recipe constructors from ae2Recipes instead.
Recipe Syntax:
```
ae2Recipes.inscriber.inscribe(Item.of("output"),Item.of("input"),Item.of("press")) 
	// Up to three input items, ordered middle - top - bottom
ae2Recipes.inscriber.press(Item.of("outputItem"), Item.of("inputItem1"))
```